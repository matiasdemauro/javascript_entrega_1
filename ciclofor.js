//Pido un numero, luego resuelvo la tabla.
let numero = prompt("Ingrese un número para calcular su tabla");
if (numero != "") { 
for (let i = 0; i <= 10; i++) {
    let resultado = numero * i;
     alert(numero + "X" + i + "=" + resultado);
    
}
}
else {
    alert("Error. Se ingresó un dato vacío");
    
}

