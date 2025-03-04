import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/index.js';
import logger from './utils/logger.js';

const app = express();

dotenv.config({});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// Req body JSON: {firstName:"Mike",email:"a@b.c"}
// with those middleware we get automatically
// => JS object attached to the Req object: e.g. req.body.firstName

app.use(`${process.env.BE_API_URL_PREFIX}`, routes);

app.listen(process.env.BE_SERVER_PORT, () => {
  logger.log('info', `Backend starting on port ${process.env.BE_SERVER_PORT}`);
});
