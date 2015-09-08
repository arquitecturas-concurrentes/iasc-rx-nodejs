var assert = require("assert");
var progenitoresComunes = require('../src/progenitores-comunes.js');

function findall(query, cont) {
  return query.toArray().subscribe(cont);
}

describe("no determinsmo con continuaciones", function(){

  it("un solo resultado", function(done) {
    findall(progenitoresComunes("pedro", "maria"), function(resultados) {
      assert.deepEqual(resultados, ["ana"]);
      done();
    });
  })

  it("multiples resultados", function(done) {
    findall(progenitoresComunes("estela", "maria"), function(resultados) {
      assert.deepEqual(resultados, ["ana", "mario"]);
      done();
    });
  })

  it("ningun resultado", function(done) {
    findall(progenitoresComunes("rodolfo", "maria"), function(resultados){
      assert.deepEqual(resultados, []);
      done();
    });
  })
})


