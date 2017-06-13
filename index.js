const express = require('express');

const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const apiRoutes = require('./apiRoutes');

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));
app.use('/api/v1', apiRoutes);

app.use('/', express.static(`${__dirname}/public`));

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`API REST corriendo en http://localhost:${port}`);
});
