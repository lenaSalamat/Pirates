const express = require('express');
const router = express.Router();

//get models;
const Pirate = require('../model/Pirate');

Pirate.methods(['get', 'post', 'put', 'delete']);
Pirate.register(router, '/pirates');

module.exports = router;