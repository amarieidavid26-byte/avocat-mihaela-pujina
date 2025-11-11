#!/bin/bash

# Color Update Script for Lawyer Website
# This script updates color references from dark/gold theme to light/sage/terracotta theme

echo "🎨 Starting color scheme update..."

# Define file patterns to update
FILES="components/**/*.tsx app/**/*.tsx"

# Function to replace colors in a file
update_file() {
    local file=$1
    echo "Updating: $file"

    # Create backup
    cp "$file" "$file.backup"

    # Replace color classes (most common patterns)
    sed -i '' 's/bg-black/bg-sage/g' "$file"
    sed -i '' 's/text-gold/text-terracotta/g' "$file"
    sed -i '' 's/border-gold/border-sage/g' "$file"
    sed -i '' 's/bg-gold/bg-sage/g' "$file"
    sed -i '' 's/hover:bg-gold-dark/hover:bg-sage-light/g' "$file"
    sed -i '' 's/hover:text-gold-dark/hover:text-sage-dark/g' "$file"
    sed -i '' 's/text-gradient-gold/text-gradient-sage/g' "$file"

    echo "✓ Updated: $file"
}

# Find and update all component files
find components app -name "*.tsx" -type f | while read file; do
    if [[ ! "$file" =~ \.backup$ ]]; then
        update_file "$file"
    fi
done

echo "✨ Color update complete!"
echo "⚠️  Backups created with .backup extension"
echo "🔍 Please review changes and test the application"
