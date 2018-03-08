const Cedula = require('./models/cedula');
module.exports = {
    
    sacar(valor) {

        var Cedulas = new Array();
        
        var cedulas = [
            new Cedula(100, 0),
            new Cedula(50, 0),
            new Cedula(20, 0),
            new Cedula(10, 0)
        ]

        var menorCedula = cedulas
            .map((cedula) => cedula.valor)
            .reduce((anterior, proximo) => Math.min(anterior, proximo))
        

        var total = valor;
        if (valor%menorCedula === 0 && valor >= menorCedula) {
            cedulas.forEach(cedula => {
                while (total >= cedula.valor) {
                    total -= cedula.valor;
                    cedula.quantidade += 1;
                } 
            });
    
        } else {
            return [];
        }        
        return cedulas;
    }
}
