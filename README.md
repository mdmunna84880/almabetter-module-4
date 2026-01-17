# Get YouTube Subscribers Backend

This project is a simple backend application built using Node.js and MongoDB.  
It provides APIs to fetch YouTube subscriber details from cloud database (Mongo Atlas).

## Features

- RESTful API architecture
- MongoDB data persistence using Mongoose
- Input validation for subscriber IDs
- Swagger-based API documentation

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Swagger UI – API documentation

## Prerequisites

- Node.js installed
- Good Network to fetch data

## How to Run locally

1. Install dependencies: `npm install`
2. Start Server: `node src/index.js`

The server will start on port 3000.

## API Endpoints

- `GET /subscribers`  
Returns all subscribers

- `GET /subscribers/names`  
Returns subscriber names and subscribed channels

- `GET /subscribers/:id`  
Returns subscriber details by ID  
Returns status code 400 if the ID is invalid

- `GET /api-docs`
Interactive API documentation generated using Swagger UI.
Allows testing all endpoints directly from the browser.