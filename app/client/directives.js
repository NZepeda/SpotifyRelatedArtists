var directivesModule = angular.module('RelatedArtists.directives', []);

directivesModule.directive('typeahead', ['$parse', '$location', '$window', '$route','Data', function($parse, $location, $window, $route, Data){
  return function(scope, element, attrs, controller){
    var typeAhead = $window.artistSearch(element);

    typeAhead.on('typeahead:selected', function(obj, datum){
      scope.$apply(function(scope){
        var val = typeAhead.typeahead('val');
        console.log('val');
      });
    });
  }
}]);
