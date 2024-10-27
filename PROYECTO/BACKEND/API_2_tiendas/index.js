const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./src/routes/index');

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT_API, () => {
    console.log('Server running!');
});