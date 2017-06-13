angular.module('gistApp').controller("gistCtrl",function ($state, gistsService, $stateParams) {
  let me = this;
  me.currentId = $stateParams.id;
  
  me.refresh = function(){
    gistsService.getOne(me.currentId).then(
      function (response){
        me.gist = response;
      },
      function(error){
        alert('something went wrong');
        console.error(error);
      }
    );
  };
  
  me.refresh();
});

