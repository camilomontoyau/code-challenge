const {getAllGists, getOneGist} = require('../services/github.service');

const getAll = (req, res) => {
  getAllGists()
    .then(gists=>res.status(200).json(gists))
    .catch(err=>res.status(500).json(err));
};

const getOne = (req, res) => {
  getOneGist(req.params.gistId)
    .then(gist=>res.status(200).json(gist))
    .catch(err=>res.status(500).json(err));
};

exports = module.exports = {
  getOne,
  getAll
};