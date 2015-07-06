$(function () {

    var $input = $('#input-txt'),
        $results = $('#input-txt-results');

    /* Only get the value from each key up */
    Rx.Observable.fromEvent($input, 'keyup')
        .map(function (events) {
            return events.target.value;
        })
        .debounce(500 /*ms*/)
        .filter(function (text) {
            return text.length > 2;
        })
        .subscribe(function (s) {
            console.log('next => ' + s);
            $results.text(s);
        });

});

