var controllerModule = angular.module('RelatedArtists.controllers', ['RelatedArtists.services']);

controllerModule.controller('SearchController', ['Data', '$scope', '$q', function(Data, $scope, $q){

    $scope.artist = "";

    $scope.searchButtonClicked = function(){
        Data.getArtistInfo($scope.artist).then(function(response){
            console.log(response);
        })
    }

}]);

controllerModule.controller('ResultsController', ['Data', '$scope', '$q', function(Data, $scope, $q){

    $scope.$watch(function(){return Data.artistSelected}, function(newValue, oldValue){
        if(newValue !== oldValue){
            console.log(newValue);
        }
    }, true);
}]);