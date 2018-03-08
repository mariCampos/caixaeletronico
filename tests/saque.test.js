const saque = require('../saque');
const Cedula = require('../models/cedula');

test('Comparar quantidade de cédulas no array de retorno para 20', () => {
  var resultado = saque.sacar(20);
  expect(resultado[2].quantidade).toEqual(1);
});

test('Comparar quantidade de cédulas no array de retorno para 300', () => {
  var resultado = saque.sacar(300);
  expect(resultado[0].quantidade).toEqual(3);
});

test('Compara mais de uma quantidade de cédulas no array de quantidade', () => {
  var resultado = saque.sacar(340);
  
  expect(resultado[0].quantidade).toEqual(3);
  expect(resultado[1].quantidade).toEqual(0);
  expect(resultado[2].quantidade).toEqual(2);
});

test('sacar valor abaixo de 10', () => {
  var quantidade = saque.sacar(9);
  
  expect(quantidade.length).toEqual(0);
});


