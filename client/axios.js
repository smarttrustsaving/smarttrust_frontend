const axios = require("axios");
const api = require("./api");

const instance = axios.create({
  baseURL: api,
});

module.exports = instance;
