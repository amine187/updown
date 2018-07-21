module.exports = function (app) {
    var express = require('express');
    var router = express.Router();
    var description = require('../json/description.json');

    router.get('', function (req, res) {
        res.send(description);
    });

    router.get('/:id', function (req, res) {
        const id = req.id || 1;

        description.data = description.data[id - 1];
        res.send(description);
    });

    router.patch('/:id', function (req, res) {
        const id = req.id || 1;

        description.data = description.data[id - 1];
        res.send(description, 204);
    });

    app.use('/api/v1/descriptions', router);
};