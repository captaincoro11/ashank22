
const express = require('express');
const { register } = require('../controller/user');

const app = express();

app.post('/register',register);

module.exports = app;