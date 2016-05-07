angular.module('angstudy').controller('CardsController', function($scope, $http){
  $scope.cards = [];

  $http.get('http://localhost:3000/api/persons')
  .success(function(retorno){
    console.log(retorno);
    $scope.cards = retorno;
  })
  .error(function(erro) {
        console.log(erro);
    });


  $scope.modalShown = false;

  $scope.toggleModal = function(card) {
    $scope.modalShown = !$scope.modalShown;
    $scope.card = card;
    console.log(card);
  };
});
