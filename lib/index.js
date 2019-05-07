const cpfValidator = (cpf) => {
  if (typeof cpf === 'number') return false;
  const cpfArray = cpf.replace(/[\.\-\s]/g, '').split('');
  if (cpfArray.every((num) => num === cpfArray[0]) ||
    isNaN(parseInt(cpf)) ||
    cpfArray.length !== 11) {
    return false;
  } else if (cpfValidation(cpfArray)) {
    return true;
  } else {
    return false;
  }
};
const cpfValidation = (cpf) => {
  let cpfNineDigits = cpf.slice(0, 9);
  let cpfTenDigits = cpf.slice(0, 10);
  let firstDigit = (cpfAccount(cpfNineDigits, 10));
  let secondDigit = (cpfAccount(cpfTenDigits, 11));
  if (firstDigit === parseInt(cpf[9]) && secondDigit === parseInt(cpf[10])) {
    return true;
  }
  return false;
};
let cpfAccount = (cpf, size) => {
  let result = cpf.map((num) => parseInt(num) * size--)
    .reduce((accum, num) => accum += num);
  return (result % 11) < 2 ? 0 : 11 - (result % 11); 
};
module.exports.cpfValidator = cpfValidator;