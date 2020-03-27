const express = require('express');
const routs = require('./routs');
const app = express();

app.use(cors());
app.use(express.jason());
app.use(routs)

app.listen(3333);
