var expect = require('chai').expect
foo = 'best';
x=4;
beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
describe('expectations', () => {
    it('attendre que foo soit une chaine',()=>{expect(foo).to.be.a('string');}) // tester le type
    it('attendre que foo soit de longueur 4',()=>{
        expect(foo).length(4);
    });
    it('attendre une valeur numérique ',()=>{
        expect(x).to.be.lessThan(10); // même chose pour les date
        // même démarche pour greaterThan
    });
    
});
