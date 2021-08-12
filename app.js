const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('config');
const Logger = require('./utilities/logger').child({ location: './app/app.js' });

// config
const port = config.get('main.port.value');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
}).then(() => {
    Logger.info('db connection successful');
},
(error) => {
    Logger.info(error);
});

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
    server = app.listen(port, () => {
        Logger.info(`app started at port:${port}`);
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
