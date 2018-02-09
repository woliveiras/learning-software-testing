import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calculator', () => {
  // smoke tests
  describe('Smoke tests', () => {
    it('Should exist sum', () => {
      expect(sum).to.exist;
    });

    it('Should exist sub', () => {
      expect(sub).to.exist;
    });

    it('Should exist mult', () => {
      expect(mult).to.exist;
    });

    it('Should exist div', () => {
      expect(div).to.exist;
    });

    it('Should exist method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('Should exist method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('Should exist method mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('Should exist method div', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });

    describe('Sum', () => {
      it('Should return 4 when sum(2, 2)', () => {
        expect(sum(2, 2)).to.be.equal(4);
      });
    });

    describe('Sub', () => {
      it('Should return 2 when sub(4, 2)', () => {
        expect(sub(4, 2)).to.be.equal(2);
      });
    });

    describe('Mult', () => {
      it('Should return 4 when mult(2, 2)', () => {
        expect(mult(2, 2)).to.be.equal(4);
      });
    });

    describe('Div', () => {
      it('Should return 2 when div(4, 2)', () => {
        expect(div(4, 2)).to.be.equal(2);
      });
      it('Should return `division by 0 is not possible` div(4, 0)', () => {
        expect(div(4, 0)).to.be.equal('division by 0 is not possible');
      });
    });
  });
});
