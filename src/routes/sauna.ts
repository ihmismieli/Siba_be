import express, { Request, Response } from 'express';
import { admin } from '../authorization/admin.js';
import { planner } from '../authorization/planner.js';
import { roleChecker } from '../authorization/roleChecker.js';
import { statist } from '../authorization/statist.js';
import { authenticator } from '../authorization/userValidation.js';
import db from '../db/index.js';
import db_knex from '../db/index_knex.js';
import {
  dbErrorHandler,
  requestErrorHandler,
  successHandler,
} from '../responseHandler/index.js';
import logger from '../utils/logger.js';
import { validate, validateIdObl } from '../validationHandler/index.js';
import { validateSaunaPost } from '../validationHandler/sauna.js';

const sauna = express.Router();

sauna.get(
  '/',
  [authenticator, admin, planner, statist, roleChecker, validate],
  (req: Request, res: Response) => {
    db_knex('Sauna')
      .select()
      .orderBy('name', 'asc')
      .then((data) => {
        successHandler(req, res, data, 'getAll successful - Sauna');
      })
      .catch((error) => {
        dbErrorHandler(req, res, error, 'Oops! Nothing came through - Sauna');
      });
  },
);

sauna.get(
  '/sauna/contains-s',
  [authenticator, admin, planner, statist, roleChecker, validate],
  (req: Request, res: Response) => {
    db_knex('Sauna')
      .where('name', 'like', '%s%')
      .then((data) => {
        successHandler(
          req,
          res,
          data,
          'getAll saunas that contains letter s - Sauna',
        );
      })
      .catch((error) => {
        dbErrorHandler(req, res, error, 'Oops! Nothing came through - Sauna');
      });
  },
);

sauna.post(
  '/',
  validateSaunaPost,
  [authenticator, admin, planner, roleChecker, validate],
  (req: Request, res: Response) => {
    db_knex
      .insert(req.body)
      .into('Sauna')
      .then((idArray) => {
        successHandler(req, res, idArray, 'Adding a sauna was successful.');
        logger.info(`Sauna ${req.body.name} created with ID ${idArray}`);
      })
      .catch((error) => {
        dbErrorHandler(req, res, error, 'Oops! Create failed - sauna');
      });
  },
);

sauna.post(
  '/recent',
  [authenticator, admin, planner, roleChecker, validate],
  (req: Request, res: Response) => {
    const { date } = req.body;
    db_knex('Sauna')
      .where('opened', '>', date)
      .then((data) => {
        successHandler(
          req,
          res,
          data,
          `Saunas newer than ${date} retrieved successfully`,
        );
      })
      .catch((error) => {
        dbErrorHandler(req, res, error, 'Oops! Failed to fetch saunas');
      });
  },
);

export default sauna;
