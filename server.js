const express = require('express');
let history = require('connect-history-api-fallback')
const path = require('path');
const serveStatic = require('serve-static');

app = express();
app.use(history({
    verbose: true
}))

app.use(serveStatic(__dirname + "/dist"));
const port = process.env.PORT || 80;
app.listen(port);
console.log('Todo ready en el puerto: '+ port);
