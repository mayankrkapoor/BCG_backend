const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// config
const port = 3000;

// mongoose.Promise = global.Promise
// mongoose.connect('url', {
//     useNewUrlParser : true
// }).then(() => {
//     console.log('db connection successful');
// },
// error => {
//     console.log(error)
// });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(cors());

app.get('/ping', (req, res) => {
    res.send('pong!');
});

let server;
function start() {
    server = app.listen(port, () => {
        console.log(`app started at port:`, port);
    });
}

function stop() {
    server.close();
}

start();

module.exports = start;
module.exports = stop;