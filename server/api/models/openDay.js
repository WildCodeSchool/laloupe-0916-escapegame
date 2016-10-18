import mongoose from 'mongoose';

const openDaySchema = new mongoose.Schema({
    jour: String,
    horaires: String,
});

let model = mongoose.model('openDay', openDaySchema);

export default class openDay {

    findAll(req, res) {
        model.find({}, (err, openDays) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(openDays);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, openDay) => {
            if (err || !openDay) {
                res.sendStatus(403);
            } else {
                res.json(openDay);
            }
        });
    }

    create(req, res) {
        model.create({
                jour: req.body.jour,
                horaires: req.body.horaires,
            },
            (err, openDay) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(openDay);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            jour: req.body.jour,
            horaires: req.body.horaires,
        }, (err, openDay) => {
            if (err || !openDay) {
                res.status(500).send(err.message);
            } else {
                res.json(openDay);
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
