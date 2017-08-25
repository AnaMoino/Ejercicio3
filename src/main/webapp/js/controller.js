angular.module('ej3_2.controller', [])


.controller('pokeController', function($scope, $log, $http) {
    
    $scope.getPokemon = function(){
        $scope.pokeFacts = [];
        
        var url="https://pokeapi.co/api/v2/pokemon/"+$scope.search;
        
        $http({method:'GET',
            url:url})
                .then(function success(response){
                    $scope.pokeFacts = response.data;
                    $log.warn("Facts encontrados");
            
                }, function error(response){
                    $scope.pokeFacts = [];
                });
         
        $scope.dev = {};
    }

});