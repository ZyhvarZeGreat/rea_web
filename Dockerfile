# Use a smaller Node.js base image
FROM node:20-alpine AS base

# Install build dependencies
RUN apk add --no-cache \
 g++ \
 make \
 python3 \
 libc6-compat

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for npm install
COPY package*.json ./

# Expose port 3000 (if needed)
EXPOSE 3000

# ---- Dependencies and Build Stage ----
FROM base AS builder

# Set working directory for the builder stage
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm ci
RUN npm run build

# ---- Production Stage ----
FROM base AS production

# Set working directory for the production stage
WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Install only production dependencies
RUN npm ci --production

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Switch to the non-root user
USER nextjs

# Copy built assets from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/public ./public

# Copy package.json to handle scripts in production
COPY --from=builder /app/package.json ./package.json

# Start the application
CMD npm start

# ---- Development Stage ----
FROM base AS dev

# Set working directory for the development stage
WORKDIR /app

# Set NODE_ENV to development
ENV NODE_ENV=development

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Command to run in development mode
CMD npm run dev
