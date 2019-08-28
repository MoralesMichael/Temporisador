export default {
    Constantes: {


    },
    funciones:{
        soloNumeros:function (evt) {
            evt = (evt) ? evt : window.event;
            let charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();
            } else {
                return true;
            }
        },
        puntoMilesDecimal:function(numero){
            return numero.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        },
        sumar:function(paquetes) {
            return paquetes.reduce((suma, i) => suma + i.ndt1, 0);
        },
        urlParse:function( cadena){
            return cadena.replace(/\s+/g, '-').toLowerCase();
        },
        isEmpty:function(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        },
        minusculas:function(texto){
            let aux=String(texto);
            return aux.toLocaleLowerCase();
        },
        validarCi:function(value,opcion){
            let valor;
            let porcion1=0;
            let acu=0;
            let number = value;
            let dto = number.length;
            if(opcion){
                switch (opcion.id) {
                    case 1:
                        for (let i=0; i<dto; i++){
                            valor = parseInt(number.substring(i,i+1));
                            if(valor===0||valor===1||valor===2||valor===3||valor===4||valor===5||valor===6||valor===7||valor===8||valor===9){
                                acu = acu+1;
                            }
                        }
                        if(acu===dto){
                            while(number.substring(10,13)!=="001")
                                return false;
                            while(number.substring(0,2)>24)
                                return false;
                            porcion1 = number.substring(2,3);
                            if(porcion1<6)
                                return true;//persona natural
                            else
                            if(porcion1===6)
                                return true;//entidad publica
                            else
                            if(porcion1===9)
                                return true;//sociedad privada
                            return false;
                        }else{
                            return false
                        }

                    case 2:
                        for (let i=0; i<dto; i++){
                            valor = parseInt(number.substring(i,i+1));
                            if(valor===0||valor===1||valor===2||valor===3||valor===4||valor===5||valor===6||valor===7||valor===8||valor===9){
                                acu = acu+1;
                            }
                        }
                        if(acu===dto){
                            while(number.substring(10,13)!=="001")
                                return false;
                            while(number.substring(0,2)>24)
                                return false;
                            porcion1 = number.substring(2,3);
                            if(porcion1<6)
                                return true;//persona natural
                            else
                            if(porcion1===6)
                                return true;//entidad publica
                            else
                            if(porcion1===9)
                                return true;//sociedad privada
                            return false;
                        }else{
                            return false
                        }
                    case 3:
                        if (typeof(value) == 'string' && value.length === 10 && /^\d+$/.test(value)) {
                            let digitos = value.split('').map(Number);
                            let codigo_provincia = digitos[0] * 10 + digitos[1];
                            if (codigo_provincia >= 1 && (codigo_provincia <= 24 || codigo_provincia === 30)) {
                                let digito_verificador = digitos.pop();
                                let digito_calculado = digitos.reduce(
                                    function (valorPrevio, valorActual, indice) {
                                        return valorPrevio - (valorActual * (2 - indice % 2)) % 9 - (valorActual === 9) * 9;
                                    }, 1000) % 10;
                                return digito_calculado === digito_verificador;
                            }
                        }
                        return false;
                    case 4:
                        return value.length >= opcion.ndt1;
                    default:
                        return true;
                }
            }else{
                return false;
            }
        },
    }
};
