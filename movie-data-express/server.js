
const express = require("express");
const app = express();

const axios = require("axios");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static("./../react-app/build/"))