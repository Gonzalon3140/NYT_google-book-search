const db = require("../models/books");

module.exports = {
    findAll: function (req, res) {
        Book.find(req.query)
            .then(book => res.status(422).json(err))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        Book.find(req.params.id)
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        Book.create(req.body)
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        Book.findOneAndUpdate({
                id: req.params.id
            }, req.body)
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        Books.findById(req.params.id)
            .then(book => book.remove())
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    }
};