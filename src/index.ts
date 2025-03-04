import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/index.js';
import logger from './utils/logger.js';
// notice all of the above are "default imports",
// first from npmjs modules (~libraries) then from our own.

const app = express(); // We command Node.js only via Express

dotenv.config({}); // Loads the .env file variables as env vars

app.use(cors());
// Here we allow connections client that has got its
// Frontend code from any "current origin", good for development
// BAD for real use in production.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// Req body JSON: {firstName:"Mike",email:"a@b.c"}
// with those middleware we get automatically
// => JS object attached to the Req object: e.g. req.body.firstName

app.use(`${process.env.BE_API_URL_PREFIX}`, routes);
// This starts the routing with "/api/" + attaches lot of routes...

app.listen(process.env.BE_SERVER_PORT, () => {
  logger.log('info', `Backend starting on port ${process.env.BE_SERVER_PORT}`);
});
