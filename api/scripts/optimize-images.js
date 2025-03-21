const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const uploadDir = path.join(__dirname, "../public/uploads");
const optimizedDir = path.join(uploadDir, "optimized");

if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

const optimizeImages = async () => {
  const files = fs
    .readdirSync(uploadDir)
    .filter(
      (file) =>
        file.endsWith(".jpg") || file.endsWith(".jpeg") 
    );

  for (let file of files) {
    const filePath = path.join(uploadDir, file);
    const optimizedImagePath = path.join(
      optimizedDir,
  
      `${path.basename(file, path.extname(file))}.webp`
    ); 

    try {
    
      const optimizedBuffer = await sharp(filePath)
        .webp({ quality: 60 }) 
        .resize({ width: 1000, withoutEnlargement: true }) 
        .toBuffer();


      const optimizedFileDir = path.dirname(optimizedImagePath);
      if (!fs.existsSync(optimizedFileDir)) {
        fs.mkdirSync(optimizedFileDir, { recursive: true });
      }


      fs.writeFileSync(optimizedImagePath, optimizedBuffer);
    } catch (error) {
      console.error(`Error processing image ${file}:`, error.message);
    }
  }
};

optimizeImages();
