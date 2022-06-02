//const { describe } = require('mocha');
var assert = require('chai').assert
var foo = ["teste","test2"];
describe("testes",function(){
it('teste type',function(){
assert.typeOf(foo, 'Array');
});
it('teste longueur',()=>{
    assert.equal(2,foo.length);
})
// without optional message)
})