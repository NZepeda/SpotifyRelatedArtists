var servicesModule = angular.module('RelatedArtists.services', []);

servicesModule.service('Data', ['$location', '$http', '$q', '$window', function($location, $http, $q, $window){

var data = {};

data.artistSelected = {};

data.getArtistInfo = function(artist){
    
    return $http({
        method: 'GET',
        url: "https://api.spotify.com/v1/search?q=" + encodeURIComponent(artist) + "&type=artist"
    }).
    then(function(response){
        return response;
    }).catch(function(error){
        console.log(error);
    });
}

data.getRelatedArtists = function(artistId){

    return $http({
        method: 'GET',
        url: 'https://api.spotify.com/v1/artists/' +  encodeURIComponent(artistId) + '/related-artists'
    }).
    then(function(response){
        return response;
    }).catch(function(error){
        console.log(error);
    });
}

return data;

}]);