# Publishing @myntis/sdk to npm

## Prerequisites

1. **npm account**: You need an npm account with access to the `@myntis` scope
2. **Login to npm**: Run `npm login` first (or use a granular token in CI)

## Pre-publish Checklist

- [ ] Update version in `package.json` (following semver)
- [ ] Build passes: `npm run build`
- [ ] All tests pass (if any): `npm test`
- [ ] README.md is up to date
- [ ] CHANGELOG.md updated (if you have one)
- [ ] Git tag matches version

## Publishing Steps

### 1. Clean build
```bash
cd /Users/yashchaudhary/Desktop/Myntis-FullStack/packages/myntis-sdk
npm run clean
npm run build
```

### 2. Test the package locally (optional)
```bash
npm pack
# This creates myntis-sdk-1.0.0.tgz
# Test it: npm install ./myntis-sdk-1.0.0.tgz in another project
```

### 3. Login to npm (first time only)
```bash
npm login
# Enter your npm username, password, and email
# For 2FA: enter one-time password when prompted
```

### 4. Publish to npm

**For scoped packages (@myntis/sdk), first publish requires --access public:**
```bash
npm publish --access public
```

**For subsequent versions:**
```bash
npm publish
```

If your account enforces security key/WebAuthn for 2FA, CLI publish typically requires a granular npm token with publish scope and bypass 2FA enabled.

### 5. Verify publication
```bash
npm info @myntis/sdk
# Should show the latest version and metadata

# Try installing in a test project
mkdir test-install && cd test-install
npm init -y
npm install @myntis/sdk
```

## Version Management

Follow semantic versioning (semver):
- **Patch** (1.0.x): Bug fixes, no breaking changes
- **Minor** (1.x.0): New features, backward compatible
- **Major** (x.0.0): Breaking changes

Update version:
```bash
npm version patch   # 1.0.x -> 1.0.(x+1)
npm version minor   # 1.x.0 -> 1.(x+1).0
npm version major   # x.0.0 -> (x+1).0.0
```

## Troubleshooting

### "Package name too similar to existing package"
- The `@myntis` scope might not be registered to you
- Create the scope on npm: https://www.npmjs.com/org/create
- Or use a different scope: `@your-username/myntis-sdk`

### "You must be logged in to publish packages"
```bash
npm login
```

### "You do not have permission to publish"
- Check if you have access to `@myntis` scope
- Add collaborators: `npm owner add <username> @myntis/sdk`

### Large package size warning
- The package is ~4MB due to ZK circuits
- This is expected and necessary
- npm allows packages up to 100MB

## What Gets Published

According to `package.json` "files" array:
- ✅ `dist/` - Compiled TypeScript
- ✅ `zk-circuits/` - ZK proving keys and WASM
- ✅ `README.md`
- ✅ `SELF_SUFFICIENT_USAGE.md`
- ✅ `package.json`
- ❌ `src/` - Source TypeScript (excluded)
- ❌ `node_modules/` - Dependencies (excluded)

Total package size: ~4MB

## Post-Publish

1. **Tag the release in git:**
```bash
git tag v1.0.0
git push origin v1.0.0
```

2. **Create GitHub release** (optional)
- Go to repository releases
- Create new release from tag
- Add changelog notes

3. **Update documentation:**
- Update installation instructions
- Share npm link: https://www.npmjs.com/package/@myntis/sdk

## npm Package URL

After publishing, your package will be available at:
- **npm**: https://www.npmjs.com/package/@myntis/sdk
- **Install**: `npm install @myntis/sdk`
- **CDN**: https://unpkg.com/@myntis/sdk@<version>/
