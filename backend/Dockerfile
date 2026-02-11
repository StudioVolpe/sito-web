FROM node:20-alpine

# Install build dependencies
RUN apk add --no-cache python3 make g++ libc6-compat

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
