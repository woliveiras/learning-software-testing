const expect = require('chai').expect;
const calc = require('../src/calc/main.js');

describe('Calculator', () => {
  // smoke tests
  describe('Smoke tests', () => {
    it('Should exist calc lib', () => {
      expect(calc).to.exist;
    });

    it('Should exist method sum', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('Should exist method sub', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('Should exist method mult', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });

    it('Should exist method div', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });

    describe('Sum', () => {
      it('Should return 4 when sum(2, 2)', () => {
        expect(calc.sum(2, 2)).to.be.equal(4);
      });
    });

    describe('Sub', () => {
      it('Should return 2 when sub(4, 2)', () => {
        expect(calc.sub(4, 2)).to.be.equal(2);
      });
    });

    describe('Mult', () => {
      it('Should return 4 when mult(2, 2)', () => {
        expect(calc.mult(2, 2)).to.be.equal(4);
      });
    });

    describe('Div', () => {
      it('Should return 2 when div(4, 2)', () => {
        expect(calc.div(4, 2)).to.be.equal(2);
      });
      it('Should return `division by 0 is not possible` div(4, 0)', () => {
        expect(calc.div(4, 0)).to.be.equal('division by 0 is not possible');
      });
    });
  });
});
