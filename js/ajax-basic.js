var requestStream = Rx.Observable.just('https://api.github.com/users');

var responseMetastream = requestStream
    .map(function(requestUrl) {
        return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
    });