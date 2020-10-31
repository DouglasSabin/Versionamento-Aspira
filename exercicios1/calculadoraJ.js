const SOMA = 'somar';
const SUB = 'subtrair';
const MULT = 'multiplicar';
const DIV = 'dividir';

function calculadora(tipoCalculo, num, num2) {
    let total=0;
    switch(tipoCalculo) {
        case SOMA:
            total = adicao(num, num2);
            break;
        case SUB:
            total = subtracao(num, num2);
            break;
        case MULT:
            total = multiplicacao(num, num2);
            break;
        case DIV:
            total = divisao(num, num2);
            break;
        default:
            return total;
    }
    return total;
}

function adicao (numero, numero2) {
    return numero + numero2;
}

function subtracao (numero,numero2) {
    return numero - numero2;
}

function multiplicacao (numero, numero2) {
    return numero * numero2;
}

function divisao(numero, numero2) {
    if (numero2 == 0) {
        return ("Impossível dividir este numero por 0");
    } else {
    return numero / numero2;
    }
}

console.log (calculadora(DIV, 100, 0))