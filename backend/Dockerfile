FROM node:20-bookworm-slim

# Install build dependencies
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files
COPY package*.json ./

# Clean install dependencies (fresh, no cache)
RUN npm install

# Copy source code
COPY . .

# Build Strapi
RUN npm run build

# Expose port
EXPOSE 1337

# Start command
CMD ["npm", "run", "start"]
