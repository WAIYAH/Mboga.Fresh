import { promises as fs } from 'fs';
import path from 'path';

/**
 * Recursively copy a directory
 */
async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

/**
 * Vite plugin to copy static assets after build
 */
export default function copyStaticAssets() {
  return {
    name: 'copy-static-assets',
    closeBundle: async () => {
      // Images now live in public/assets/images/ and are copied automatically by Vite
    },
  };
}
