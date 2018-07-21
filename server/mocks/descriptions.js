module.exports = function (app) {
    var express = require('express');
    var router = express.Router();
    var description = require('../json/description.json');

    router.get('', function (req, res) {
        res.send(description);
    });

    router.get('/:id', function (req, res) {
        const id = req.params.id;
        const result = {};
        result[id] = description[id] || null;
        res.send(result);
        // console.log('sdsd',result)
        // res.send({ id: id, scontent: description[id] });
    });

    app.use('/api/v1/descriptions', router);
};