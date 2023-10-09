const express = require('express');
const cors = require('cors');
const app = express();
const apiRoutes = require('../server/routes');

app.use(express.json());

const corsOptions = {
  origin: true,
};
app.use(cors(corsOptions));

/* GET home page. */
app.get("/", function (req, res, next) {
  res.json({ ok: 1, msg: "Welcome to SnapBizz Admin Backend Services." });
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests

app.use('/api', apiRoutes);

module.exports = app;