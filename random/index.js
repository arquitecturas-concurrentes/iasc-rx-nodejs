var rx = require('rx')
var s  = new rx.Subject()

setInterval(function() { s.onNext(Math.random()) }, 500);

var o = s.asObservable()
var sp= o.map(function(random) { return random * 127 }).
          filter(function(ascii) { return ascii >= 65 && ascii <= 90 }).
          map(String.fromCharCode).
          subscribe(function(x) { console.log(x) });

sp.dispose();
