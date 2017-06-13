const express = require('express');
const router = new express.Router();
const controller = require('./controllers/controller');

router.get('/', (req, res)=> {
  res.status(200).json({message: 'api is working!'});
});

router.get('/gists', controller.getAll);

router.get('/gists/:gistId', controller.getOne);

module.exports = router;

