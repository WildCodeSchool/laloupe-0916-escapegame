import express from 'express';
import Price from '../models/price.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var price = new Price();

    router.get('/', price.findAll);

    router.get('/:id', price.findById);

    router.post('/', Auth.hasAuthorization, price.create);

    router.put('/:id', Auth.hasAuthorization, price.update);

    router.delete('/:id', Auth.hasAuthorization, price.delete);

    app.use('/prices', router);

};
