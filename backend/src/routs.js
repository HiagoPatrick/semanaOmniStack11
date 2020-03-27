const express = require("express");

const ongControler = require('./controlers/ongControler');
const incidentControlers = require('./controlers/incidentControlers');
const profileControlers = require('./controlers/profileControlers');
const sessionControlers = require('./controlers/sessionControlers');

const routs = express.Router();

routs.post('/sessions', sessionControler.create);

routs.get('/ongs', ongControler.index);
routs.post('/ongs', ongControler.create);

routs.get('/incidents', incidentControlers.index);
routs.post('/incidents', incidentControlers.create);
routs.delete('/incidents/:id', incidentControlers.delete);

routs.get('/profile', profileControlers.index);

module.exports = routs;
