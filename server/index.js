module.exports = function (app) {
    const globSync = require('glob').sync;
    const mocks = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
    const proxies = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);
    const bodyParser = require('body-parser');

    const morgan = require('morgan');
    app.use(morgan('dev'));
    app.use(bodyParser.json());

    mocks.forEach(function (route) { route(app); });
    proxies.forEach(function (route) { route(app); });
};