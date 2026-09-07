import promptSync from 'prompt-sync';
const prompt = promptSync();

//variables
//const numeropi = parseFloat(prompt("Ingrese el valor de PI: "));
//console.log("El valor de PI es: ", numeropi);

//LET ENTERAS 
//let edad = parseInt(prompt("Ingrese su edad: "));
//console.log("Su edad es: ", edad);

//LET REALES
//let estatura = parseFloat(prompt("Ingrese su estatura: "));
//console.log("Su estatura es:", estatura);




//positivo, negativo y neutro
let numero = parseInt(prompt("Ingrese un número: "));
switch (true) {
    case (numero > 0):
        console.log("El número es positivo");
        break;
    case (numero < 0):
        console.log("El número es negativo");
        break;
    default:
        console.log("El número es neutro");
}

//cotizacion de hardware con impuestos cargados
//solicita
