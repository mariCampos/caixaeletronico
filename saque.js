module.exports = {
    
    sacar(valor) {
         
        //var quantidadeCedulas = [0,0,0,0];
        var cedulas = [
            {cedula: 100, quantidade: 0},
            {cedula: 50, quantidade: 0},
            {cedula: 20, quantidade: 0},
            {cedula: 10, quantidade: 0}
        ]

        var total = valor;
        if (valor%10 === 0 && valor >= 10) {
            for(var i = 0; i < 4; i++){
                while (total >= cedulas[i].cedula) {
                    total -= cedulas[i].cedula;
                    cedulas[i].quantidade += 1;
                } 
            }
        } else {
            return [];
        }


        
        return cedulas;
    },

    formataTexto(cedulas) {
        var retorno = [];
        var frase = 'Entregar';
        if (cedulas.length > 0) {
            for(var j = 0; j < 4; j++) {
                if (cedulas[j].quantidade === 1) {
                    retorno[j] = ` ${cedulas[j].quantidade} nota de R$${cedulas[j].cedula},00`;
                } else if (cedulas[j].quantidade > 1) {
                    retorno[j] = ` ${cedulas[j].quantidade} notas de R$${cedulas[j].cedula},00`;
                }
            }
        }

        if (retorno.length === 1) {
            return frase + retorno[0];
        } else if (retorno.length > 1){
            for(var e = 0; e < retorno.length; e++) {
                if (e === retorno.length -1) {
                    frase = frase + ' e' + retorno[e];
                } else if (retorno[e] !== undefined) {
                    frase += retorno[e];
                } 
            }
        } else {
            return 'Abaixo do valor permitido.';
        }        
        return frase;
    }
}
