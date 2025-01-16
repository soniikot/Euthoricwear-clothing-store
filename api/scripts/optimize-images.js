const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const uploadDir = path.join(__dirname, "../public/uploads");
const optimizedDir = path.join(uploadDir, "optimized");

// Ensure the optimized directory exists
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

const optimizeImages = async () => {
  // Only process .jpg, .jpeg, and .png files
  const files = fs
    .readdirSync(uploadDir)
    .filter(
      (file) =>
        file.endsWith(".jpg") || file.endsWith(".jpeg") || file.endsWith(".png")
    );

  for (let file of files) {
    const filePath = path.join(uploadDir, file);
    const optimizedImagePath = path.join(
      optimizedDir,
      `${path.basename(file, path.extname(file))}.webp`
    ); // Convert to .webp

    try {
      // Use sharp to convert the image to WebP format with compression
      const optimizedBuffer = await sharp(filePath)
        .webp({ quality: 60 }) // Compress to WebP with 80% quality
        .toBuffer();

      // Ensure the target directory exists
      const optimizedFileDir = path.dirname(optimizedImagePath);
      if (!fs.existsSync(optimizedFileDir)) {
        fs.mkdirSync(optimizedFileDir, { recursive: true });
      }

      // Write the optimized image as WebP to the optimized directory
      fs.writeFileSync(optimizedImagePath, optimizedBuffer);

      console.log(`Successfully optimized and saved as WebP: ${file}`);
    } catch (error) {
      console.error(`Error processing image ${file}:`, error.message);
    }
  }
};

optimizeImages();
