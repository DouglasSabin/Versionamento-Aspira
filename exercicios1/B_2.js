let a = 0;
let b = 1;
let auxiliar;

for(i =0; i<=30; i++) {
    auxiliar = a +  b;
    a = b;
    b = auxiliar;
    console.log (auxiliar);
}