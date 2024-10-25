# Strapi API Dockerfile
# Use an official Node.js runtime as the base image
FROM node:20-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build Strapi (optional, depending on how you build it)
RUN npm run build

# Expose the Strapi default port
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "develop"]
