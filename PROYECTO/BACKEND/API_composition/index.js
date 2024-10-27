const express = require('express');
const app = express();

const routes = require('./src/routes/index.js');

app.use(express.json());
app.use(routes);

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Composite API running on port ${PORT}`);
});