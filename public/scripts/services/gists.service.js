angular.module('gistApp')
  .service('gistsService', function($http) {
    let me = this;
    let prefix = '/api/v1/gists';
    
    
    me.getAll = function(){
      return $http.get(prefix).then(function(response){
        return response.data;
      });
    };
    
    me.getOne = function(gistId){
      return $http.get(`${prefix}/${gistId}`).then(function(response){
        return response.data;
      });
    }
  });
