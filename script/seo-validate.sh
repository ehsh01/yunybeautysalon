#!/bin/bash
set -e

echo "Starting SEO Validation Build..."

# Run the build command
npm run build

# Check if the output file exists
if [ -f "docs/index.html" ]; then
  echo "✅ Build successful: docs/index.html exists."
  echo "The site is ready to be committed and deployed to GitHub Pages."
  exit 0
else
  echo "❌ Build failed: docs/index.html does not exist."
  exit 1
fi
