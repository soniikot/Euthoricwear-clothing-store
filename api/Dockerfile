# Client Dockerfile
# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /api

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app files
COPY . .

# Build the app (replace this with your build command if it's different)
RUN npm run build

# Expose the port the app runs on
EXPOSE 1337

# Run the app
CMD ["npm", "run", "develop"]
