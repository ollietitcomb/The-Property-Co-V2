const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/brand-mark.svg');
const outputPath32 = path.join(__dirname, '../public/favicon-32x32.png');
const outputPath64 = path.join(__dirname, '../public/favicon-64x64.png');
const outputPath = path.join(__dirname, '../public/favicon.png');

async function generateFavicon() {
  try {
    // Read the SVG
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Generate 32x32 PNG
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(outputPath32);
    
    console.log('✓ Generated favicon-32x32.png');
    
    // Generate 64x64 PNG (we'll use this as the main favicon.png)
    await sharp(svgBuffer)
      .resize(64, 64)
      .png()
      .toFile(outputPath64);
    
    console.log('✓ Generated favicon-64x64.png');
    
    // Copy 64x64 as the main favicon.png
    fs.copyFileSync(outputPath64, outputPath);
    
    console.log('✓ Generated favicon.png (64x64)');
    console.log('\nFavicon generation complete!');
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
