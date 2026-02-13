#!/bin/bash

# Myntis SDK Publishing Script
set -e

echo "🚀 Publishing @myntis/sdk to npm"
echo ""

# Check if logged in to npm
echo "📝 Checking npm authentication..."
if ! npm whoami &> /dev/null; then
    echo "❌ Not logged in to npm. Please run: npm login"
    exit 1
fi

echo "✅ Logged in as: $(npm whoami)"
echo ""

# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "📦 Current version: $CURRENT_VERSION"
echo ""

# Prompt for version bump
echo "Choose version bump:"
echo "1) patch (bug fixes)       - $CURRENT_VERSION -> $(npm version patch --no-git-tag-version --dry-run | tail -1)"
echo "2) minor (new features)    - $CURRENT_VERSION -> $(npm version minor --no-git-tag-version --dry-run | tail -1)"
echo "3) major (breaking changes)- $CURRENT_VERSION -> $(npm version major --no-git-tag-version --dry-run | tail -1)"
echo "4) Skip version bump (publish current version)"
echo ""
read -p "Enter choice (1-4): " choice

case $choice in
    1) npm version patch ;;
    2) npm version minor ;;
    3) npm version major ;;
    4) echo "Skipping version bump" ;;
    *) echo "Invalid choice"; exit 1 ;;
esac

NEW_VERSION=$(node -p "require('./package.json').version")
echo ""
echo "📦 Publishing version: $NEW_VERSION"
echo ""

# Clean build
echo "🧹 Cleaning old build..."
npm run clean

# Build
echo "🔨 Building SDK..."
npm run build

# Check dist exists
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist/ directory not found"
    exit 1
fi

# Check zk-circuits exist
if [ ! -d "zk-circuits" ]; then
    echo "❌ zk-circuits/ directory not found"
    exit 1
fi

echo "✅ Build successful"
echo ""

# Show what will be published
echo "📋 Files to be published:"
npm pack --dry-run 2>&1 | grep -E '^\s+[0-9]+\s+' | head -20
echo ""

# Confirm
read -p "Publish @myntis/sdk@$NEW_VERSION to npm? (y/N): " confirm
if [[ ! $confirm =~ ^[Yy]$ ]]; then
    echo "❌ Publishing cancelled"
    exit 0
fi

# Publish
echo ""
echo "🚀 Publishing to npm..."

# First publish requires --access public for scoped packages
if npm info @myntis/sdk 2>/dev/null | grep -q "published"; then
    npm publish
else
    echo "First publish - using --access public"
    npm publish --access public
fi

echo ""
echo "✅ Successfully published @myntis/sdk@$NEW_VERSION"
echo ""
echo "📦 View on npm: https://www.npmjs.com/package/@myntis/sdk"
echo "📥 Install: npm install @myntis/sdk"
echo ""
echo "🏷️  Don't forget to:"
echo "  - git tag v$NEW_VERSION"
echo "  - git push origin v$NEW_VERSION"
echo "  - Create GitHub release"
