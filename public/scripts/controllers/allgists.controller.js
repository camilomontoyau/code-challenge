angular.module('gistApp').controller("allgistsCtrl",function ($state, gistsService) {
  let me = this;
  
  me.refresh = function(){
    gistsService.getAll().then(
      function (response){
        me.gists = response;
      },
      function(error){
        alert('something went wrong');
        console.error(error);
      }
    );
  };
  
  me.refresh();
});
