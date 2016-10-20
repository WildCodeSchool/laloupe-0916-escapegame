import express from 'express';
import Comment from '../models/comment.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var comment = new Comment();

    router.get('/', comment.findAll);

    router.get('/:id', comment.findById);

    router.post('/', Auth.hasAuthorization, comment.create);

    router.put('/:id', Auth.hasAuthorization, comment.update);

    router.delete('/:id', Auth.hasAuthorization, comment.delete);

    app.use('/comments', router);

};
