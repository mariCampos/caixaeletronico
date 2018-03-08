const saque = require('./saque');
const view = require('./view');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Valor do saque: ', (answer) => {
    // TODO: Log the answer in a database
    var resposta = answer.replace(',', '.');
    var quantidade = saque.sacar(Number(resposta));
    console.log(view.formataTexto(quantidade));
    rl.close();
  });