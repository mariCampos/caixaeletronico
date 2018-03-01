const tiposCedulas = [100, 50, 20, 10];
module.exports = {
    
    sacar(valor) {
         
        var quantidadeCedulas = [0,0,0,0];

        var total = valor;
        if (valor%10 === 0 && valor >= 10) {
            for(var i = 0; i < 4; i++){
                while (total >= tiposCedulas[i]) {
                    total -= tiposCedulas[i];
                    quantidadeCedulas[i] += 1;
                } 
            }
        } else {
            return [];
        }
        
        return quantidadeCedulas;
    },

    formataTexto(quantidadeCedulas) {
        var retorno = 'Entregar';
        if (quantidadeCedulas.length > 0) {
            for(var j = 0; j < 4; j++) {
                if (quantidadeCedulas[j] !==0) {
                    retorno += ` ${quantidadeCedulas[j]} nota(s) de R$${tiposCedulas[j]},00`;
                }
            }
        } else {
            return 'Abaixo do valor permitido.';
        }
        
        return retorno;
    }
}