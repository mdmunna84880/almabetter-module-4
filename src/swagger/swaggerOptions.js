const path = require('path');

module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Get YouTube Subscribers',
      version: '1.0.0',
      description: 'API documentation for Get Youtube Subscribers',
    },
    servers: [
      {
        url: process.env.BASE_URL || 'http://localhost:3000',
      },
    ],
  },
  apis: [
    path.join(__dirname, 'annotations', '*.js'),
  ],
};