import sharp from 'sharp';
import path from 'path';

const folderPath = './public/images/postDrying';

// Images to rotate 90 degrees clockwise
const imagesToRotate = [
  '20240622_175525',
  '20240622_175537',
  '20240622_175544',
  '20240622_175551',
  '20240622_175558',
  '20240622_175605',
  '20240622_175612',
  '20240622_175643',
  '20240622_175719',
  '20240622_175739',
  '20240622_180051',
  '20240622_180717',
  '20240622_185849',
  '20240622_194059'
];

async function rotateImages() {
  console.log('🔄 Starting image rotation...\n');
  
  for (const imageName of imagesToRotate) {
    const filePath = path.join(folderPath, `${imageName}.webp`);
    
    try {
      // Rotate 90 degrees clockwise and save back
      await sharp(filePath)
        .rotate(90)
        .toFile(filePath + '.tmp');
      
      // Replace original with rotated version
      await sharp(filePath + '.tmp')
        .toFile(filePath);
      
      // Clean up temp file
      const fs = await import('fs');
      fs.unlinkSync(filePath + '.tmp');
      
      console.log(`✅ Rotated: ${imageName}.webp`);
    } catch (error) {
      console.error(`❌ Error rotating ${imageName}.webp:`, error.message);
    }
  }
  
  console.log('\n🎉 Rotation complete!');
}

rotateImages();
