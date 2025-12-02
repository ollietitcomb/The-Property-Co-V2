const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/brand-mark.svg');
const outputPath48 = path.join(__dirname, '../public/favicon.png');
const outputPath192 = path.join(__dirname, '../public/icon-192.png');
const outputPath512 = path.join(__dirname, '../public/icon-512.png');

async function generateFavicon() {
  try {
    // Read the SVG
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Generate 48x48 PNG (main favicon)
    await sharp(svgBuffer)
      .resize(48, 48)
      .png()
      .toFile(outputPath48);
    
    console.log('✓ Generated favicon.png (48x48)');
    
    // Generate 192x192 PNG
    await sharp(svgBuffer)
      .resize(192, 192)
      .png()
      .toFile(outputPath192);
    
    console.log('✓ Generated icon-192.png (192x192)');
    
    // Generate 512x512 PNG
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile(outputPath512);
    
    console.log('✓ Generated icon-512.png (512x512)');
    console.log('\nFavicon generation complete!');
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
