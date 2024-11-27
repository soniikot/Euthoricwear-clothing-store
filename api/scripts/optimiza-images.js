// scripts/optimize-images.js

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const uploadDir = path.join(__dirname, "../../client/src/assets/");

const optimizedDir = path.join(uploadDir, "optimized");

const optimizeImages = async () => {
  const files = fs
    .readdirSync(uploadDir)
    .filter((file) => file.endsWith(".jpg") || file.endsWith(".png"));

  for (let file of files) {
    try {
      const filePath = path.join(uploadDir, file);
      const optimizedImagePath = path.join(optimizedDir, file);

      const optimizedBuffer = await sharp(filePath)
        .resize(800)
        .webp({ quality: 80 })
        .toBuffer();

      fs.mkdirSync(path.dirname(optimizedImagePath), { recursive: true });
      fs.writeFileSync(optimizedImagePath, optimizedBuffer);

      console.log(`Optimized ${file}`);
    } catch (error) {
      console.error(`Error processing image ${file}:`, error);
    }
  }
};

optimizeImages();
