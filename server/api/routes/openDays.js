import express from 'express';
import OpenDay from '../models/openDay.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var openDay = new OpenDay();

    router.get('/', openDay.findAll);

    router.get('/:id', openDay.findById);

    router.post('/', Auth.hasAuthorization, openDay.create);

    router.put('/:id', Auth.hasAuthorization, openDay.update);

    router.delete('/:id', Auth.hasAuthorization, openDay.delete);

    app.use('/openDays', router);

};
