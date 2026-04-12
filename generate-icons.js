#!/usr/bin/env node

/**
 * Icon Generator Script for PWA
 * 
 * This script helps generate PWA icons from your existing logo.
 * You'll need to install sharp package first: npm install sharp
 * 
 * Usage: node generate-icons.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
try {
  const sharp = require('sharp');
  
  // Icon sizes required for PWA
  const iconSizes = [
    { name: 'icon-16x16.png', size: 16 },
    { name: 'icon-32x32.png', size: 32 },
    { name: 'icon-72x72.png', size: 72 },
    { name: 'icon-96x96.png', size: 96 },
    { name: 'icon-128x128.png', size: 128 },
    { name: 'icon-144x144.png', size: 144 },
    { name: 'icon-152x152.png', size: 152 },
    { name: 'icon-192x192.png', size: 192 },
    { name: 'icon-384x384.png', size: 384 },
    { name: 'icon-512x512.png', size: 512 }
  ];

  const sourceLogo = 'assets/white text logo.png';
  const outputDir = 'assets/icons';

  async function generateIcons() {
    try {
      // Check if source logo exists
      if (!fs.existsSync(sourceLogo)) {
        console.error(`Source logo not found: ${sourceLogo}`);
        console.log('Please make sure your logo file exists before running this script.');
        return;
      }

      // Ensure output directory exists
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      console.log('Generating PWA icons...');

      // Generate each icon size
      for (const icon of iconSizes) {
        const outputPath = path.join(outputDir, icon.name);
        
        await sharp(sourceLogo)
          .resize(icon.size, icon.size, {
            fit: 'contain',
            background: { r: 41, g: 121, b: 255, alpha: 1 } // Your brand color #2979ff
          })
          .png()
          .toFile(outputPath);

        console.log(`Generated: ${icon.name}`);
      }

      console.log('\nAll icons generated successfully!');
      console.log('Icons are ready for PWA installation.');

    } catch (error) {
      console.error('Error generating icons:', error.message);
      console.log('\nTroubleshooting:');
      console.log('1. Make sure you have sharp installed: npm install sharp');
      console.log('2. Check that your source logo exists');
      console.log('3. Ensure you have write permissions to the assets/icons directory');
    }
  }

  generateIcons();

} catch (error) {
  console.log('Sharp package not found. Please install it first:');
  console.log('npm install sharp');
  console.log('\nThen run: node generate-icons.js');
  
  console.log('\nAlternative: You can manually create icons using online tools like:');
  console.log('- https://realfavicongenerator.net/');
  console.log('- https://www.pwabuilder.com/imageGenerator');
  console.log('- PhotoShop, GIMP, or any image editor');
  
  console.log('\nRequired icon sizes:');
  console.log('- 16x16, 32x32, 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512 pixels');
}
