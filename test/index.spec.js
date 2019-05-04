let chai = require('chai');
let expect = chai.expect;
let CPF = require('../lib/index');

describe('cpfValidator()', () => {
  describe('Verificação dos números do CPF', () => {
    it('Deveria retornar true quando o primeiro dígito verificador é zero: 04114512608', () => {
      expect(CPF.cpfValidator('04114512608')).to.equal(true);
    });
    it('Deveria retornar true para a numeração: 87474718677', () => {
      expect(CPF.cpfValidator('87474718677')).to.equal(true);
    });
    it('Deveria retornar false para a numeração: 56434567865', () => {
      expect(CPF.cpfValidator('56434567865')).to.equal(false);
    });
  });
  describe('Verificação da quantidade de números', () => {
    it('Deveria retornar false para 9 números: 041145126', () => {
      expect(CPF.cpfValidator('041145126')).to.equal(false);
    });
    it('Deveria retornar false para 10 números: 0411451260', () => {
      expect(CPF.cpfValidator('0411451260')).to.equal(false);
    });
    it('Deveria retornar false para 12 números: 041145126080', () => {
      expect(CPF.cpfValidator('041145126080')).to.equal(false);
    });
  }); 
  describe('Verificação caso tenha caracteres separadores', () => {
    it('Deveria retornar true mesmo tendo ponto e hífen: 874.747.186-77', () => {
      expect(CPF.cpfValidator('874.747.186-77')).to.equal(true);
    }); 
    it('Deveria retornar true mesmo tendo separações com ponto: 874.747.186.77', () => {
      expect(CPF.cpfValidator('874.747.186.77')).to.equal(true);
    }); 
    it('Deveria retornar true para separações com hífen: 874747186-77', () => {
      expect(CPF.cpfValidator('874747186-77')).to.equal(true);
    }); 
    it('Deveria retornar true para separações com espaço: 874 747 186 77', () => {
      expect(CPF.cpfValidator('874 747 186 77')).to.equal(true);
    }); 
  });  
});    