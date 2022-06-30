//Se pide el primer numero, el bucle continua mientras el valor sea un numero, si no lo es se interrumpe el ciclo. Funciona para validar.
let num = 0;
do {
    num = prompt("Ingresar número, éste se mostrará en pantalla");
    alert (num);
}while(parseInt(num));