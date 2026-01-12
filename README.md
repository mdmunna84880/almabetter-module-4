# Get YouTube Subscribers Backend

This project is a simple backend application built using Node.js and MongoDB.  
It provides APIs to fetch YouTube subscriber details from a local database.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Prerequisites

- Node.js installed
- MongoDB running locally

## How to Run

1. Install dependencies: `npm install`
2. Create and insert initial Data into Database: `node src/createDatabase.js`
3. Start Server: `node src/index.js`

The server will start on port 3000.

## API Endpoints

- `GET /subscribers`  
Returns all subscribers

- `GET /subscribers/names`  
Returns subscriber names and subscribed channels

- `GET /subscribers/:id`  
Returns subscriber details by ID  
Returns status code 400 if the ID is invalid