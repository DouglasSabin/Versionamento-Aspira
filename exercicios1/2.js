/* Um comerciante comprou um produto e quer vendê-lo com um lucro de 45% se o valor
da compra for menor que R$ 50,00; caso contrário, o lucro será de 30%. Desenvolva
uma aplicação em JavaScript que leia o valor do produto e imprima o valor de venda
para o produto.
*/

var produto = 40.00;

if (produto>=50.00) {
    produto = produto + (produto * (45 / 100))
} else if (produto <= 50.00) {
    produto = produto + (produto * (30 / 100))
}

console.log (produto.toFixed(1));