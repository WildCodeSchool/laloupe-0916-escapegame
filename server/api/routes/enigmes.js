import express from 'express';
import Enigme from '../models/enigme.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var enigme = new Enigme();

    router.get('/', enigme.findAll);

    router.get('/:id', enigme.findById);

    router.post('/', Auth.hasAuthorization, enigme.create);

    router.put('/:id', Auth.hasAuthorization, enigme.update);

    router.delete('/:id', Auth.hasAuthorization, enigme.delete);

    app.use('/enigmes', router);

};
