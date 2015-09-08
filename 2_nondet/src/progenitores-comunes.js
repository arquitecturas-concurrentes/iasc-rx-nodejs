var rx = require('rx');

function progenitor(x) {
  return rx.Observable.create(function (observer) {
    if (x === "pedro") {
      observer.onNext("ana");
      observer.onNext("ernesto");
    } else if (x === "maria") {
      observer.onNext("ana");
      observer.onNext("mario");
    } else if (x === "estela") {
      observer.onNext("ana");
      observer.onNext("mario");
    }
    observer.onCompleted();
  });
}

function merge(id, values) {
  return function(value) {
    var vs = Object.create(values);
    vs[id] = value;
    return vs;
  }
}
function progenitoresComunes(x, y) {
  return progenitor(x)
    .flatMap(function(p1){
      return progenitor(y).map(merge('p2', {p1: p1}));
    })
    .filter(function(ps){
      return ps.p1 == ps.p2
    })
    .map(function(ps){
      return ps.p1;
    });
}

module.exports = progenitoresComunes;