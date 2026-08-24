//Tipos de datos y variables
//variable asignada a un numero

let numero = 10;
let decimal = 3.14;
let nombre = "Seba";
let booleano = true;

//Mostrar en consola los valores de las variables
console.log(numero+" "+decimal+" "+nombre+" "+booleano);
console.log("el número es:",numero);
console.log("el decimal es:",decimal);
console.log("el nombre es:",nombre);
console.log("el booleano es:",booleano);

//variable constante
const PI = 3.1416;
console.log("el valor de PI es:",PI);

//operaciones aritmeticas
let num1 = 10;
let num2 = 20;
let suma = num1 + num2;
console.log("la suma es:",suma);
console.log("la suma es:",num1 + num2);


let resta = num1 - num2;
console.log("la resta es:",resta);
console.log("la resta es:",num1 - num2);


let multiplicacion = num1 * num2;
console.log("la multiplicación es:",multiplicacion);


let division = num1 / num2;
console.log("la división es:",division);   
console.log("la división es:",num1 / num2); 

//potencia
let potencia = num1 ** 2;
console.log("la potencia es:",potencia);
console.log("la potencia es:",num1 ** 2);

//raiz
let raiz = Math.sqrt(num1);
console.log("la raíz es:",raiz);
console.log("la raíz es:",Math.sqrt(num1));



//estructuras de control
//if 
//el mayor de dos números
let a = 10;
let b = 20;
if(a > b){
    console.log("el número mayor es:",a);
}if(a < b){
    console.log("el número mayor es:",b);
}


//doble if
//numero positivo o negativo
let numero1 = -5;
if(numero1 > 0){
    console.log("el número es positivo");
} else {
    console.log("el número es negativo");
}

//ejercicio: calsificacion de un triangulo
//solicitar al usuario los lados de un triangulo y determinar si es equilatero, isosceles , escaleno o rectangulo

let lado1 = 5;
let lado2 = 5;
let lado3 = 5;

if(lado1 == lado2 || lado2 == lado3){
    console.log("el triangulo es equilatero");

} else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
    console.log("el triangulo es isosceles");

} else {
    console.log("el triangulo es escaleno");
}
if((lado1**2 + lado2**2) == lado3**2 || (lado1**2 + lado3**2) == lado2**2 || (lado2**2 + lado3**2) == lado1**2){
    console.log("el triangulo es rectangulo");
}
