# Git LFS Best Practices Guide

This guide helps you ensure that large files are properly tracked with Git LFS from the start, preventing storage quota issues.

## 🚀 Quick Start

### 1. Check LFS Status
```bash
git lfs status
```

### 2. Add New File Types to LFS
```bash
# Add a specific file type
git lfs track "*.psd"

# Add a specific file
git lfs track "path/to/large-file.ext"

# Use the helper script
./scripts/setup-lfs.sh
```

### 3. Commit Changes
```bash
git add .gitattributes
git commit -m "Add new file types to LFS tracking"
```

## 📋 File Types Already Tracked

Your repository is configured to track these file types with LFS:

### Images
- `*.gif`, `*.png`, `*.jpg`, `*.jpeg`, `*.bmp`, `*.tiff`, `*.tif`, `*.svg`, `*.ico`

### Videos
- `*.mov`, `*.mp4`, `*.avi`, `*.mkv`, `*.webm`, `*.flv`

### Audio
- `*.mp3`, `*.wav`, `*.flac`, `*.aac`, `*.ogg`

### Documents
- `*.pdf`, `*.doc`, `*.docx`, `*.xls`, `*.xlsx`, `*.ppt`, `*.pptx`

### Archives
- `*.zip`, `*.rar`, `*.7z`, `*.tar`, `*.gz`

### Data Files
- `*.csv`, `*.json`, `*.xml`, `*.sql`, `*.db`, `*.sqlite`

### Fonts
- `*.ttf`, `*.otf`, `*.woff`, `*.woff2`, `*.eot`

### 3D/CAD Files
- `*.obj`, `*.fbx`, `*.dae`, `*.3ds`, `*.blend`, `*.max`, `*.ma`, `*.mb`

### Executables
- `*.exe`, `*.dll`, `*.so`, `*.dylib`, `*.bin`

## ⚠️ Important Rules

### 1. Always Add File Types Before Adding Files
```bash
# ❌ Wrong - file already in Git history
git add large-file.gif
git lfs track "*.gif"

# ✅ Correct - add to LFS first
git lfs track "*.gif"
git add large-file.gif
```

### 2. Check File Sizes Before Committing
```bash
# Check for files larger than 10MB
find . -type f -size +10M -not -path "./node_modules/*" -not -path "./.git/*"
```

### 3. Use the Pre-commit Hook
The pre-commit hook will warn you about large files that aren't tracked with LFS.

## 🔧 Common Commands

### Check What's Tracked
```bash
git lfs track
```

### Check LFS Status
```bash
git lfs status
```

### List LFS Files
```bash
git lfs ls-files
```

### Pull LFS Files
```bash
git lfs pull
```

### Fetch LFS Files
```bash
git lfs fetch --all
```

## 🛠️ Troubleshooting

### File Not Tracked by LFS
If you accidentally commit a large file without LFS:

1. Remove from Git history:
```bash
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch path/to/file' --prune-empty --tag-name-filter cat -- --all
```

2. Add to LFS tracking:
```bash
git lfs track "*.extension"
```

3. Re-add the file:
```bash
git add path/to/file
```

### LFS Storage Quota Exceeded
1. Check current usage: `git lfs status`
2. Remove large files from history (see above)
3. Consider upgrading your LFS storage plan
4. Optimize files (compress images, convert videos to smaller formats)

## 📊 Monitoring LFS Usage

### Check Repository Size
```bash
du -sh .git
```

### Check LFS Objects
```bash
du -sh .git/lfs/objects
```

### List Large Files
```bash
find . -type f -size +10M -exec ls -lh {} \;
```

## 🎯 Best Practices

1. **Set up LFS tracking before adding any large files**
2. **Use the pre-commit hook to catch large files**
3. **Regularly check LFS usage and clean up if needed**
4. **Optimize files before adding to repository**
5. **Document file size limits for your team**
6. **Use the helper script for adding new file types**

## 🆘 Getting Help

- **Git LFS Documentation**: https://git-lfs.github.com/
- **GitHub LFS Limits**: Check your repository settings
- **File Optimization Tools**: Use tools like ImageOptim, HandBrake, etc.

## 📝 Example Workflow

```bash
# 1. Add new file type to LFS
git lfs track "*.psd"

# 2. Commit the .gitattributes change
git add .gitattributes
git commit -m "Add Photoshop files to LFS tracking"

# 3. Add your large files
git add design.psd
git commit -m "Add design file"

# 4. Push (LFS files will be uploaded automatically)
git push origin main
```

Remember: **Always set up LFS tracking before adding large files to your repository!** 