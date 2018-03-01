const saque = require('./saque');

// test('sacar valor com uma nota de 10', () => {
//   var resultado = saque.sacar(10);
//   expect(resultado).toMatch('Entregar 1 nota de R$10');
// });

test('two plus two is four', () => {
  var teste = 'test';
  expect(teste).toMatch('test');
});

test('Comparar quantidade de cédulas no array de retorno para 20', () => {
  var resultado = saque.sacar(20);
  expect(resultado).toContain(1);
});

test('Comparar quantidade de cédulas no array de retorno para 50', () => {
  var resultado = saque.sacar(50);
  expect(resultado).toContain(1);
});

test('Comparar quantidade de cédulas no array de retorno para 300', () => {
  var resultado = saque.sacar(300);
  expect(resultado).toContain(3);
});

test('Compara mais de uma quantidade de cédulas no array de quantidade', () => {
  var resultado = saque.sacar(340);
  
  expect(resultado).toContain(2);
  expect(resultado).toContain(3);
});

test('sacar valor abaixo de 10', () => {
  var quantidade = saque.sacar(9);
  var resultado = saque.formataTexto(quantidade);
  expect(resultado).toMatch('Abaixo do valor permitido.');
});

test('sacar valor com uma nota de 30', () => {
  var resultado = saque.formataTexto([0,0,1,1]);
  expect(resultado).toMatch('Entregar 1 nota(s) de R$20,00 1 nota(s) de R$10,00');
});