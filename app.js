const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');
const db = require('./models');
const Logger = require('./utilities/logger').child({ location: './app/app.js' });

// config
const port = config.get('main.port.value');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(cors());

let server;
function start() {
    app.get('/ping', (req, res) => {
        res.send('pong!');
    });
    require('./routes/policy-router')(app);
    server = app.listen(port, () => {
        Logger.info(`app started at port:${port}`);
    });
    db.sequelize.sync().then(() => {
        Logger.info('Drop and re-sync db.');
    });
}

function stop() {
    server.close();
    Logger.info('Server closed');
}

start();

// Export functions for unit tests
module.exports = app;
module.exports.start = start;
module.exports.stop = stop;
