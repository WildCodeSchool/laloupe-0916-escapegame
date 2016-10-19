import mongoose from 'mongoose';

const priceSchema = new mongoose.Schema({
    joueur: String,
    prix: String,
});

let model = mongoose.model('price', priceSchema);

export default class price {

    findAll(req, res) {
        model.find({}, (err, prices) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(prices);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, price) => {
            if (err || !price) {
                res.sendStatus(403);
            } else {
                res.json(price);
            }
        });
    }

    create(req, res) {
        model.create({
                joueur: req.body.joueur,
                prix: req.body.prix,
            },
            (err, price) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(price);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            joueur: req.body.joueur,
            prix: req.body.prix,
        }, (err, price) => {
            if (err || !price) {
                res.status(500).send(err.message);
            } else {
                res.json(price);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        });
    }
}
