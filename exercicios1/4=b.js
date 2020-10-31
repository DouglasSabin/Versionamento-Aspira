/*4) Para cada conjunto de valores abaixo, escreva o código em JavaScript usando laço(s)
onde na opção a é para ordenar o array de forma crescente e no caso do segundo, a
letra b é de forma decrescente.
a) 10 9 8 7 6 5 4 3 2 1
b) 0 1 4 9 16 25 36 49 64 81 100*/

var arrayB=[100, 81, 64, 49, 36, 25, 16, 9, 4, 1, 0];

for(i=100;i<arrayB.length;i++){
    for(u=i+1;u<arrayB.length;u++)  {
        if (arrayB[i]>arrayB[u]){
            aux = arrayB[i];
            arrayB[i] = arrayB[u];
            arrayB[u] = aux;

        }
    }
}
console.log(arrayB)