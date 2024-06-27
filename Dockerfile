FROM node:lts-alpine
# Use an official node image as a parent image
FROM node:lts-alpine AS build

# Set the working directory
WORKDIR /app

# Copy only the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the app for production
RUN npm run docker-build -- --mode production

# Use an official Nginx image to serve the static content
FROM nginx:alpine

# Copy the built app from the previous stage to the Nginx web directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
