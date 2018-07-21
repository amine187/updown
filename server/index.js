module.exports = function (app) {
    var globSync = require('glob').sync;
    var mocks = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
    var proxies = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);
    var bodyParser = require('body-parser');

    // Log proxy requests
    var morgan = require('morgan');
    app.use(morgan('dev'));
    app.use(bodyParser.json());

    mocks.forEach(function (route) { route(app); });
    proxies.forEach(function (route) { route(app); });
};