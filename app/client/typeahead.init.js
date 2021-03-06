(function(){

  window.artistSearch = function(element){
    var remotehost = "https://api.spotify.com"
    $.support.cors = true;

    // Get our templates preped and ready for the show
    var $form = $(element).closest('form'),
      artistSuggestionTmpl = $('.artist-template', $form).html();

    // Set up the hound!
    var artistEngine = new Bloodhound({
        name:'artists',
        limit: 5,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
        dupDetector: function(a, b) {return a.id === b.id},
        remote: {
            url: remotehost + '/v1/search?q=%QUERY&type=artist',
            wildcard: '%QUERY',
            filter: function(response){
                return response.artists.items
            }
        },
        filter: function(response){
            return response.data.artists.items
        }
    });

    artistEngine.clearPrefetchCache();
    artistEngine.initialize();

    // Configure the typehead
    var typeAhead = $(element).typeahead({
        highlight: true,
        minLength: 1
        },
        {
            name: 'artists',
            displayKey: function (artist) {
            return artist.name
        },
        source: artistEngine.ttAdapter(),
        templates: {
            suggestion: Handlebars.compile(artistSuggestionTmpl)
        }
    });

    $form.submit(function (e) {
      typeAhead.typeahead('close');
      e.preventDefault(); // eat submit
    });

    // Capture search term
    $(element).bind('keyup', function () {
        var searchTerm = $('input.typeahead.tt-input').val();
        $('input.typeahead.tt-input').prop("searchTerm", searchTerm);
    });
    return typeAhead;
  }

  $(function(){

    var $typeAhead = $('[data-jquery-typeahead]');

    $typeAhead.each(function(){
        //var typeAhead = window.artistSearch($(this)[0]);
        var $form = $(this).closest('form');

        $form.unbind('submit');
        $form.submit(function(e){
            //console.log($typeAhead);
        });
    });
  });



})(jQuery);
