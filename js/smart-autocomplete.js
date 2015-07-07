$(function () {

    var $input = $('#input-txt'),
        $results = $('#input-txt-results');

    //Rx.Observable.getJSON()

    /* Only get the value from each key up */
    Rx.Observable.fromEvent($input, 'keyup')
        .map(function (events) {
            return events.target.value;
        })
        .debounce(500 /*ms*/)
        .distinctUntilChanged()
        .filter(function (text) {
            return text.length > 2;
        })
        .flatMapLatest(function (query) {
            return searchWikipedia(query)
        })
        .subscribe(function (data) {
            //console.log('next => ' + s);
            var res = data[1];
            $results.empty();
            $(res).each(function (index, value) {
                $('<li>' + value + '</li>').appendTo($results);
            });
        });

});

function searchWikipedia(query) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: query
        }
    }).promise();
}

