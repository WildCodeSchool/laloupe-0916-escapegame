import express from 'express';
import Enigme from '../models/enigme.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var enigme = new Enigme();

    router.get('/', enigme.findAll);

    router.get('/:id', enigme.findById);

    router.post('/', enigme.create);

    router.put('/:id', enigme.update);

    router.delete('/:id', enigme.delete);

    app.use('/enigmes',  router);

};
