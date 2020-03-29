const express = require('express');
const app = express();
const cors = require('cors');
const { errors } = require('celebrate');

app.use(express.json());
app.use(cors());

app.use(require('./routes'));
app.use(errors());

module.exports = app