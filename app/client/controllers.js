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

    $scope.userSelectedArtist = false;
    $scope.artist = {};
    $scope.similarArtists = [];
    $scope.similarArtistsLoaded = false;

    $scope.$watch(function(){return Data.artistSelected}, function(newValue, oldValue){
        if(newValue !== oldValue && newValue !== null){
            
            $scope.userSelectedArtist = true;
            $scope.artist = newValue;

            Data.getRelatedArtists($scope.artist.id).then(function(response){
                $scope.userSelectedArtist = false;
                $scope.similarArtists = response.data.artists;
                $scope.similarArtistsLoaded = true;
            });
        }
    }, true);

    
}]);