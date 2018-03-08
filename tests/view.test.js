const view = require('../view');
const Cedula = require('../models/cedula')

test('retorno formataTexto() abaixo do valor permitido', () => {
    var resultado = view.formataTexto([
            new Cedula(100, 0),
            new Cedula(50, 0),
            new Cedula(20, 0),
            new Cedula(10, 0)]);
  
      expect(resultado).toMatch('Abaixo do valor permitido.');
});

test('sacar valor com uma nota de 30', () => {
    var resultado = view.formataTexto([
        new Cedula(100, 0),
        new Cedula(50, 0),
        new Cedula(20, 1),
        new Cedula(10, 1)]);
    expect(resultado).toMatch('Entregar 1 nota de R$20,00 e 1 nota de R$10,00');
  });

