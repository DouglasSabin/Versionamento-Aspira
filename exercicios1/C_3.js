/*Desenvolva um programa, que receba um
número, calcule e mostre os resultados da
tabuada desse número.
*/

var num = 7;
var tabuada = 1

for (i=1; i<=10; i++) {
    tabuada = num * i;
    let text = num + " x " + i + " é igual a " + tabuada
    console.log(text);
}