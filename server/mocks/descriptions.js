module.exports = function (app) {
    var express = require('express');
    var router = express.Router();
    var description = require('../json/description.json');

    /**
    * @api {get} /api/v1/descriptions Retrieve all descriptions
    * @apiVersion 1.0.0
    * @apiName GetAll
    * @apiGroup Desctiption
    * @apiPermission guest user
    *
    * @apiParam empty
    *
    * @apiExample {js} Example usage:
    * $http.get(url, data)
    *   .success((res, status) => doSomethingHere())
    *   .error((err, status) => doSomethingHere());
    *
    * @apiSuccess {String} service token
    * @apiSuccess {String} description message
    *
    * @apiSuccessExample {json} Success response:
    *     HTTPS 200 OK
    *     {
    *      "hs1x": "push messages/device pings",
    *      "m06d": "log-in system",
    *     }
    */
    router.get('', function (req, res) {
        res.send(description);
    });

    /**
    * @api {get} /api/v1/descriptions/:id Retrieve a description
    * @apiVersion 1.0.0
    * @apiName GetAll
    * @apiGroup Desctiption
    * @apiPermission guest user
    *
    * @apiParam {String} id The description id
    *
    * @apiExample {js} Example usage:
    * $http.get(url)
    *   .success((res, status) => doSomethingHere())
    *   .error((err, status) => doSomethingHere());
    *
    * @apiSuccess {String} service token
    * @apiSuccess {String} description message
    *
    * @apiSuccessExample {json} Success response:
    *     HTTPS 200 OK
    *     {
    *      "hs1x": "push messages/device pings",
    *     }
    */
    router.get('/:id', function (req, res) {
        const id = req.params.id;
        const result = {};
        result[id] = description[id] || null;
        res.send(result);
    });

    app.use('/api/v1/descriptions', router);
};