const saque = require('./saque');

test('sacar valor com uma nota', () => {
  expect(saque(10).toBe('Entregar 1 nota de R$10,00'));
});