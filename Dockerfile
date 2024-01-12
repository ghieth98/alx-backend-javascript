FROM ubuntu:18.04

# Install dependencies
RUN apt-get update && apt-get install -y curl

# Install Node.js 12.11.x
RUN curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs

# Set working directory
WORKDIR /app

# Copy your application files into the container
COPY ./ /app


