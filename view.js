module.exports = {
    formataTexto(cedulas) {
        var retorno = [];
        var frase = 'Entregar';
        if (cedulas.length > 0) {
            cedulas.forEach(cedula => {
                if (cedula.quantidade === 1) {
                    retorno.push(` ${cedula.quantidade} nota de R$${cedula.valor},00`);
                } else if (cedula.quantidade > 1) {
                    retorno.push(` ${cedula.quantidade} notas de R$${cedula.valor},00`);
                }
            });
        }

        if (retorno.length === 1) {
            return frase + retorno[0];
        } else if (retorno.length > 1){
            for(var e = 0; e < retorno.length; e++) {
                if (e === retorno.length -1) {
                    frase = frase + ' e' + retorno[e];
                } else {
                    frase += retorno[e];
                } 
            }
        } else {
            return 'Abaixo do valor permitido.';
        }        
        return frase;
    }
}