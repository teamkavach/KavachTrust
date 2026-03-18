import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './input';
const outputDir = './output';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Read the input directory
fs.readdir(inputDir, (err, files) => {
    if (err) {
        return console.error("Could not list the directory.", err);
    }

    files.forEach((file) => {
        const inputFilePath = path.join(inputDir, file);
        const fileNameNoExt = path.parse(file).name;
        const outputFilePath = path.join(outputDir, `${fileNameNoExt}.webp`);

        // Only process files (ignoring directories)
        if (fs.lstatSync(inputFilePath).isFile()) {
            sharp(inputFilePath)
                .webp({ quality: 80 }) // Adjust quality from 1-100
                .toFile(outputFilePath)
                .then(() => {
                    console.log(`✅ Converted: ${file} -> ${fileNameNoExt}.webp`);
                })
                .catch((err) => {
                    console.error(`❌ Error processing ${file}:`, err);
                });
        }
    });
});