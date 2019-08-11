const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));
app.use(cookieParser())

require("./config/sessions.js")(app);
app.use(cors({'credentials': true, 'origin': 'http://localhost:3000'}))


var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
  console.log('Listening on', port);
});
