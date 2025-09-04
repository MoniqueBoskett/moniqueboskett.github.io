#!/usr/bin/env bash
# generate_posters_gitbash.sh
# For Git Bash on Windows. Run from your project root (where "public" folder lives).
# Requires ffmpeg installed and added to PATH (e.g., via winget or manual install).

set -euo pipefail

ROOT="public/recipes"
if [ ! -d "$ROOT" ]; then
  echo "❌ Folder not found: $ROOT  (Run this script from your project root)"
  exit 1
fi

cd "$ROOT"

# For each MP4, create a poster JPG if missing
find . -type f -name "*.mp4" | while read -r f; do
  jpg="${f%.mp4}.jpg"
  if [ ! -f "$jpg" ]; then
    echo "🎬 Creating poster for $(basename "$f")"
    ffmpeg -y -ss 00:00:02 -i "$f" -vframes 1 "$jpg"
  else
    echo "⏭️  Skip (exists): $jpg"
  fi
done

echo "✅ Done."
