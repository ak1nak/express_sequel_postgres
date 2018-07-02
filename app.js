const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const profileRoute = require('./routes/profileRoute');


const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(profileRoute);
app.use(routes);


module.exports = app;
