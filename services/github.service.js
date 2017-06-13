'use strict';

const request = require('request');
const Promise = require('bluebird');

const getAllGists = Promise.promisify(done=>{
  let options = {
    url: 'https://api.github.com/gists/public',
    json: true,
    headers: {
      'User-Agent': 'kerosine9'
    }
  };
  
  request(options, (error, response, body)=>{
    if(error) {
      return done(error);
    }
    
    if(response.statusCode !== 200) {
      return done(body);
    }
    
    return done(null, body);
  });
});

const getOneGist = Promise.promisify((gistId, done)=>{
  let options = {
    url: `https://api.github.com/gists/${gistId}`,
    json: true,
    headers: {
      'User-Agent': 'kerosine9'
    }
  };
  
  request(options, (error, response, body)=>{
    if(error) {
      return done(error);
    }
    
    if(response.statusCode !== 200) {
      return done(body);
    }
    
    return done(null, body);
  });
});

exports = module.exports = {
  getAllGists,
  getOneGist
};

