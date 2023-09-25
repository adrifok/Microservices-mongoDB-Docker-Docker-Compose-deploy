# Use Alpine Linux as the base image for Node.js
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 (the Node.js application's listening port)
EXPOSE 3000

# Define an environment variable for specifying the microservice name
ENV MICROSERVICE_NAME "StarWars"

# Start the Node.js application for the specified microservice
CMD ["node", "nodemon index.js"]
