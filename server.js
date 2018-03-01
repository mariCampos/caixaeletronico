const saque = require('./saque');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Valor do saque: ', (answer) => {
    // TODO: Log the answer in a database
    var quantidade = saque.sacar(Number(answer));
    console.log(saque.formataTexto(quantidade));
    rl.close();
  });