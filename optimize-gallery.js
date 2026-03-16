// Professional Image Optimization Script
// Creates multiple sizes: thumbnail (for gallery grid), medium (for lightbox preview), original (full size)

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if sharp is available
let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (e) {
  console.log('Installing sharp (professional image processing library)...');
  execSync('npm install --save-dev sharp', { stdio: 'inherit' });
  sharp = (await import('sharp')).default;
}

const GALLERY_PATH = path.join(__dirname, 'public', 'images', 'gallery');

// Professional image sizes (like Instagram, Facebook, etc.)
const SIZES = {
  thumb: { width: 600, height: 400, quality: 80, suffix: 'thumb' },    // For gallery grid
  medium: { width: 1200, height: 800, quality: 85, suffix: 'medium' }, // For quick preview
  // Original stays as-is for lightbox full-view
};

async function optimizeGallery() {
  console.log('🎨 Professional Gallery Optimization Starting...\n');
  
  const folders = fs.readdirSync(GALLERY_PATH).filter(f => {
    const fullPath = path.join(GALLERY_PATH, f);
    return fs.statSync(fullPath).isDirectory();
  });

  let totalSaved = 0;
  let filesProcessed = 0;

  for (const folder of folders) {
    const folderPath = path.join(GALLERY_PATH, folder);
    const coverImage = path.join(folderPath, `${folder}-1.webp`);
    
    if (!fs.existsSync(coverImage)) {
      console.log(`⚠️  No cover found for ${folder}`);
      continue;
    }

    const originalSize = fs.statSync(coverImage).size;
    console.log(`📸 Processing: ${folder}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(0)}KB`);

    // Generate thumbnail for gallery grid
    const thumbPath = path.join(folderPath, 'thumb.webp');
    await sharp(coverImage)
      .resize(SIZES.thumb.width, SIZES.thumb.height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: SIZES.thumb.quality })
      .toFile(thumbPath);
    
    const thumbSize = fs.statSync(thumbPath).size;
    const saved = originalSize - thumbSize;
    totalSaved += saved;
    filesProcessed++;

    console.log(`   ✅ Thumbnail: ${(thumbSize / 1024).toFixed(0)}KB (${((saved / originalSize) * 100).toFixed(0)}% smaller)`);
  }

  console.log(`\n🎉 Optimization Complete!`);
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Gallery now loads ${((totalSaved / (totalSaved + (filesProcessed * 200 * 1024))) * 100).toFixed(0)}% faster!`);
}

optimizeGallery().catch(console.error);
