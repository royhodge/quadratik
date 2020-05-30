const express = require('express');
const db = require('./libs/db');
const payment = require('./libs/payment');
const app = express();

const argv = require('minimist')(process.argv.slice(2), {
    'default': {
        'port': 3000,
        'host': '0.0.0.0',
    },
    'alias': {
        'port': 'p',
        'host': 'h'
    }
});
const { port, host } = argv;

app.use(express.static('public'));
app.use('/r', db.api);
app.use('/r', payment.api);

app.listen(port, host, () => console.log(`Server listening on http://${host}:${port}`))