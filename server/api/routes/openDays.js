import express from 'express';
import OpenDay from '../models/openDay.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var openDay = new OpenDay();

    router.get('/', openDay.findAll);

    router.get('/:id', openDay.findById);

    router.post('/', openDay.create);

    router.put('/:id', openDay.update);

    router.delete('/:id', openDay.delete);

    app.use('/openDays', Auth.hasAuthorization, router);

};
