# Use Node.js 18 based on Alpine Linux as the lightweight base image
FROM node:18-alpine

# Set the working directory inside the container to /app
# This is where the app code and dependencies will reside
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
# These files are needed for installing the Node.js dependencies
COPY package.json package-lock.json ./

# Install Node.js dependencies, allowing for compatibility with legacy peer dependencies
# The --legacy-peer-deps flag resolves potential version conflicts in older packages
RUN npm install --legacy-peer-deps

# Copy the entire application source code from the host to the container's working directory
# This includes all project files necessary for building and running the application
COPY . .

# Expose the default port (4200) used by Angular's development server
# This makes the app accessible from outside the container
EXPOSE 4200

# Define the default command to run the Angular app in development mode
# It starts the development server with live reloading capabilities
CMD ["npm", "run", "start"]
