const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Valor do saque: ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`: ${answer}`);
  
    rl.close();
  });