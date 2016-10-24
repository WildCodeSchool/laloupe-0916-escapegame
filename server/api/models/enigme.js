import mongoose from 'mongoose';

const enigmeSchema = new mongoose.Schema({
    nom_enigme: String,
    description_enigme: String,
    picture:String,
});

let model = mongoose.model('Enigme', enigmeSchema);

export default class Enigme {

    findAll(req, res) {
        model.find({}, (err, enigmes) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(enigmes);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, enigme) => {
            if (err || !enigme) {
                res.sendStatus(403);
            } else {
                res.json(enigme);
            }
        });
    }

    create(req, res) {
        model.create({
                nom_enigme: req.body.nom_enigme,
                description_enigme: req.body.description_enigme,
                picture:req.body.picture,
            },
            (err, enigme) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(enigme);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            nom_enigme: req.body.nom_enigme,
            description_enigme: req.body.description_enigme,
            picture:req.body.picture,

        }, (err, enigme) => {
            if (err || !enigme) {
                res.status(500).send(err.message);
            } else {
                res.json(enigme);
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
