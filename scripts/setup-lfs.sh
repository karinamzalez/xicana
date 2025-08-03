#!/bin/bash
#
# Git LFS Setup Helper Script
# This script helps you add new file types to Git LFS tracking
#

set -e

echo "🔧 Git LFS Setup Helper"
echo "========================"

# Function to add file type to LFS
add_to_lfs() {
    local pattern="$1"
    local description="$2"
    
    echo "Adding $description ($pattern) to LFS tracking..."
    git lfs track "$pattern"
    echo "✅ Added $pattern"
}

# Function to check if file type is already tracked
is_tracked() {
    local pattern="$1"
    git lfs track | grep -q "$pattern"
}

# Common file types that should be tracked with LFS
declare -A file_types=(
    ["*.psd"]="Photoshop files"
    ["*.ai"]="Adobe Illustrator files"
    ["*.sketch"]="Sketch files"
    ["*.fig"]="Figma files"
    ["*.skp"]="SketchUp files"
    ["*.dwg"]="AutoCAD files"
    ["*.dxf"]="AutoCAD DXF files"
    ["*.stl"]="3D printing files"
    ["*.ply"]="3D point cloud files"
    ["*.hdr"]="High dynamic range images"
    ["*.raw"]="Raw image files"
    ["*.cr2"]="Canon RAW files"
    ["*.nef"]="Nikon RAW files"
    ["*.arw"]="Sony RAW files"
    ["*.iso"]="Disk image files"
    ["*.dmg"]="macOS disk images"
    ["*.deb"]="Debian packages"
    ["*.rpm"]="RPM packages"
    ["*.apk"]="Android packages"
    ["*.ipa"]="iOS packages"
    ["*.msi"]="Windows installers"
    ["*.pkg"]="macOS packages"
)

echo "Checking for new file types to add..."
echo ""

for pattern in "${!file_types[@]}"; do
    if ! is_tracked "$pattern"; then
        description="${file_types[$pattern]}"
        echo "Found untracked file type: $description ($pattern)"
        read -p "Add to LFS tracking? (y/n): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            add_to_lfs "$pattern" "$description"
        fi
    fi
done

echo ""
echo "🎯 Manual file type addition"
echo "============================"
echo "To add a custom file type, use:"
echo "  git lfs track '*.yourextension'"
echo ""
echo "To add a specific file:"
echo "  git lfs track 'path/to/your/file.ext'"
echo ""
echo "After adding new patterns, commit the .gitattributes file:"
echo "  git add .gitattributes"
echo "  git commit -m 'Add new file types to LFS tracking'"

echo ""
echo "📊 Current LFS Status"
echo "===================="
git lfs status

echo ""
echo "✅ LFS setup complete!" 