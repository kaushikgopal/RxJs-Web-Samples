$(function () {

    var fnameInputSource = Rx.Observable.fromEvent($('input.fname'), 'keyup')
    .map(function(events) {
        return events.target.value;
    })
    .map(function (input) {
        return input.length > 2;
    });

    var lnameInputSource = Rx.Observable.fromEvent($('input.lname'), 'keyup')
    .map(function(events) {
        return events.target.value;
    })
    .map(function (input) {
        return input.length > 2;
    });

    var passInputSource = Rx.Observable.fromEvent($('input.pass'), 'keyup')
    .map(function(events) {
        return events.target.value;
    })
    .map(function (input) {
        return input.length > 2;
    });

    Rx.Observable.combineLatest(
        fnameInputSource,
        lnameInputSource,
        passInputSource,
        function (s1, s2, s3) {
            return s1 && s2 && s3;
        }
        )
    .subscribe(function (formValid) {
        if (formValid) {
            $("#result").text("VALID");
        }else {
            $("#result").text("INVALID");
        };
    });

});