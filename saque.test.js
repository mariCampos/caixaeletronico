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
  var resultado = saque.formataTexto(quantidade);
  expect(resultado).toMatch('Abaixo do valor permitido.');
});

test('sacar valor com uma nota de 30', () => {
  var resultado = saque.formataTexto([
    {cedula: 100, quantidade: 0},
    {cedula: 50, quantidade: 0},
    {cedula: 20, quantidade: 1},
    {cedula: 10, quantidade: 1}
  ]);
  expect(resultado).toMatch('Entregar 1 nota de R$20,00 e 1 nota de R$10,00');
});