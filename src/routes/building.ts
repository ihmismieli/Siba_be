import express, { Response, Request } from 'express';
import db from '../db/index_knex.js';
import {
  dbErrorHandler,
  successHandler,
  requestErrorHandler,
  validationErrorHandler,
} from '../responseHandler/index.js';
import { validationResult } from 'express-validator';
import { validateAddUpdateBuilding } from '../validationHandler/index.js';

const building = express.Router();

building.get('/', (req, res) => {
  db('Building')
    .select()
    .then((data) => {
      successHandler(req, res, data, 'Successfully read the buildings from DB');
    })
    .catch((err) => {
      dbErrorHandler(
        req,
        res,
        err,
        'Error trying to read all buildings from DB',
      );
    });
});

building.get('/:id', (req, res) => {
  db('Building')
    .select()
    .where('id', req.params.id)
    .then((data) => {
      successHandler(req, res, data, 'Successfully read the buildings from DB');
    })
    .catch((err) => {
      dbErrorHandler(req, res, err, 'Oops! Nothing came through - Building');
    });
});

building.delete('/:id', (req, res) => {
  db('Building')
    .select()
    .where('id', req.params.id)
    .del()
    .then((rowsAffected) => {
      if (rowsAffected === 1) {
        successHandler(
          req,
          res,
          rowsAffected,
          `Delete succesfull! Count of deleted rows: ${rowsAffected}`,
        );
      } else {
        requestErrorHandler(req, res, `Invalid building id:${req.params.id}`);
      }
    })
    .catch((error) => {
      dbErrorHandler(req, res, error, 'Error delete failed');
    });
});

building.post('/', validateAddUpdateBuilding, (req: Request, res: Response) => {
  const valResult = validationResult(req);

  if (!valResult.isEmpty()) {
    return validationErrorHandler(
      req,
      res,
      `${valResult}validateAddUpdateBuilding error`,
    );
  }

  db('Building')
    .insert(req.body)
    .into('Building')
    .then((idArray) => {
      successHandler(
        req,
        res,
        idArray,
        'Adding a building, or multiple buildings was succesful',
      );
    })
    .catch((error) => {
      if (error.errno === 1062) {
        requestErrorHandler(
          req,
          res,
          `Conflict: Building with the name ${req.body.name} already exists!`,
        );
      } else if (error.errno === 1054) {
        requestErrorHandler(
          req,
          res,
          "error in spelling [either in 'name' and/or in 'description'].",
        );
      } else {
        dbErrorHandler(req, res, error, 'error adding building');
      }
    });
});

building.put('/', (req, res) => {
  if (!req.body.name) {
    requestErrorHandler(req, res, 'Building name is missing.');
  } else {
    db('Building')
      .where('id', req.body.id)
      .update(req.body)
      .then((rowsAffected) => {
        if (rowsAffected === 1) {
          successHandler(
            req,
            res,
            rowsAffected,
            `Update building successful! Count of modified rows: ${rowsAffected}`,
          );
        } else {
          requestErrorHandler(
            req,
            res,
            `Update building not successful, ${rowsAffected} row modified`,
          );
        }
      })
      .catch((error) => {
        if (error.errno === 1062) {
          requestErrorHandler(
            req,
            res,
            `DB 1062: Building with the name ${req.body.name} already exists!`,
          );
        } else if (error.errno === 1054) {
          requestErrorHandler(
            req,
            res,
            "error in spelling [either in 'name' and/or in 'description'].",
          );
        } else {
          dbErrorHandler(req, res, error, 'error updating building');
        }
      });
  }
});

export default building;
