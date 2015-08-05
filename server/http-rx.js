var rx = require('rx');
var http = require('http');

exports.createServer = function (port) {
    var subject = new rx.Subject();
    http.createServer(function (request, response) {
       subject.onNext({ request:request, response:response });
    }).listen(port);
    return subject.asObservable();
};
