#!/usr/bin/env bash

# THE FABRICATOR
# Purpose: Ingest organisms from empire-dropbox and weld them into the Live Grid (src/components/organisms)

set -euo pipefail

DROPBOX_DIR="./empire-dropbox/organisms"
GRID_DIR="./src/components/organisms"

echo ">> INITIALIZING FABRICATOR..."
echo ">> SOURCE: $DROPBOX_DIR"
echo ">> TARGET: $GRID_DIR"

if [ ! -d "$DROPBOX_DIR" ]; then
  echo "!! ERROR: Dropbox directory missing."
  exit 1
fi

# Ensure target directories exist
mkdir -p "$GRID_DIR/atoms"
mkdir -p "$GRID_DIR/molecules"
mkdir -p "$GRID_DIR/wired"

echo ">> WELDING COMPONENTS..."

# Recursive copy to preserve structure (atoms/molecules/wired)
# cp -r will handle the subdirectories.
# We use -n (no clobber) or just overwrite? User said "overwrite" usually implied by "print squares".
# Let's use -u (update) or just standard cp to ensure latest version.

cp -rv "$DROPBOX_DIR"/* "$GRID_DIR/"

echo ""
echo ">> DEPLOYMENT COMPLETE."
echo ">> THE LEGION GROWS."

