# Build Stage
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /api

COPY package.json package-lock.json ./

# Install dependencies (including dev dependencies for the build)
RUN npm ci

# Copy the rest of your application source code
COPY . .

# Build the Strapi admin panel and other production assets.
RUN npm run build

# Production Stage
FROM node:20-alpine
WORKDIR /api

# Copy built assets and source code from the builder stage
COPY --from=builder /api ./

# Create .tmp directory and ensure proper permissions
RUN mkdir -p .tmp && chown -R root:root .tmp

# Copy existing database if it exists (will be ignored if file doesn't exist)
VOLUME ["/api/.tmp"]

# Expose the port that Strapi uses (default 1337)
EXPOSE 1337

# Start Strapi in production mode
CMD ["npm", "start"]