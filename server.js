// === CORE ===
const express = require("express");
const next = require("next");

// === 3RD PARTY ===
require("dotenv").config();

// === PARAMETRIZED ROUTING ===
const routes = require("./routes");

// === FUNCTIONS ===
const { serverStartMessages } = require("./lib/functions");

// === CONSTANTS ===
const PORT = process.env.PORT || 3000;

// === SETUP APP ===
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  // here you could do some express stuff if you fancy, eg. running custom middleware or offering an API
  // server.get('/api', (req, res) => {
  //   return res.send({ version: 1.0 })
  // });

  // General NextJS route handler
  server.use(handler);

  // Start server and trigger messages
  server.listen(PORT, err => {
    serverStartMessages(err, PORT);
  });
});
