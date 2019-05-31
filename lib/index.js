const cpfValidator = (cpf) => {
  if (typeof cpf === 'number') return false;
  const cpfArray = cpf.replace(/[\.\-\s]/g, '').split('').map(Number);
  if (cpfArray.every((num) => num === cpfArray[0]) ||
    isNaN(parseInt(cpf)) ||
    cpfArray.length !== 11) {
    return false;
  } else {
    return cpfValidation(cpfArray);
  }
};

const cpfValidation = (cpf) => {
  const cpfNineDigits = cpf.slice(0, 9);
  const firstDigit = (cpfAccount(cpfNineDigits, 10));
  
  if(firstDigit === cpf[9]) {
    const cpfTenDigits = cpf.slice(0, 10);
    const secondDigit = (cpfAccount(cpfTenDigits, 11));
    return secondDigit === cpf[10];
  }
  
  return false;
};

const cpfAccount = (cpf, size) => {
  const result = cpf.map((num) => num * size--)
    .reduce((accum, num) => accum += num);
  return (result % 11) < 2 ? 0 : 11 - (result % 11); 
};

module.exports.cpfValidator = cpfValidator;
