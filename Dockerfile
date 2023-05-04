# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install app dependencies
RUN npm install --legacy-peer-deps

# Copy app source code
COPY . .

# Set environment variables

# Expose port 8084
EXPOSE 8084

# Run database migrations
CMD npx sequelize-cli db:migrate && npm start


# docker build -t service-user .

# docker run -it --rm -p 8084:8084 --name container-user service-user
