import promptSync from 'prompt-sync';
const prompt = promptSync();

//Ejercicio 1 – Control de Acceso y Gestión de Permisos por Rol
//Un sistema de seguridad web evalúa el nivel de acceso de un usuario según su rol de cuenta, estado de la suscripción y horario de ingreso.
//Requerimientos:
//Solicitar mediante prompt() el rol del usuario ("admin", "editor", "cliente"), el estado de la cuenta ("activa" o "suspendida") y la hora actual (entero de 0 a 23).
//Lógica condicional:
//Si la cuenta está "suspendida", denegar el acceso inmediatamente sin importar el rol.
//Si el rol es "admin", permitir acceso total a cualquier hora.
//Si el rol es "editor", permitir acceso únicamente entre las 8 y las 18 hs.
//Si el rol es "cliente", permitir acceso si la cuenta está "activa" sin restricción horaria.
//Para cualquier otro rol desconocido, indicar "Rol no autorizado".
//Mostrar el resultado mediante alert().

/*
let rol = prompt("Ingrese su rol (admin, editor, cliente): ").toLowerCase();
let estadoCuenta = prompt("Ingrese el estado de su cuenta (activa, suspendida): ").toLowerCase();
let horaActual = parseInt(prompt("Ingrese la hora actual (0-23): "));
if (estadoCuenta === "suspendida") {
    console.log("Acceso denegado: cuenta suspendida.");
}else {
    switch (rol) {
        case "admin":
            console.log("Acceso permitido: rol de administrador.");
            break;
        case "editor":
            if (horaActual >= 8 && horaActual < 18) {
                console.log("Acceso permitido: rol de editor.");
            } else {
                console.log("Acceso denegado: fuera del horario de trabajo.");
            }
            break;
        case "cliente":
            if (estadoCuenta === "activa") {
                console.log("Acceso permitido: rol de cliente.");
            } else {
                console.log("Acceso denegado: cuenta no activa.");
            }
            break;
        default:
            console.log("Rol no autorizado.");
    }
}
*/

//Ejercicio 2 – Cotizador Dinámico de Pólizas de Seguro Automotor
//Una compañía aseguradora calcula la prima mensual de un vehículo en base a la edad del conductor, el tipo de cobertura y el historial de siniestros.
//Requerimientos:
//Solicitar: Edad del conductor, Tipo de cobertura ("terceros", "terceros_completo", "todo_riesgo") y Cantidad de accidentes en el último año.
//Tarifas base:
//Terceros: $45.000 ARS
//Terceros Completo: $70.000 ARS
//Todo Riesgo: $110.000 ARS
//Recargos / Descuentos:
//Si el conductor tiene menos de 25 años, se aplica un recargo del 20% sobre la tarifa base.
//Si registra 0 accidentes en el último año, se le otorga un descuento del 10% de bonificación.
//Si registra 3 o más accidentes, se aplica un recargo del 30% y se inhabilita la opción "todo_riesgo".
//Mostrar mediante alert() el valor final de la póliza o la negativa de contratación si no cumple las condiciones.
/*
let edadConductor = parseInt(prompt("Ingrese la edad del conductor: "));
let tipoCobertura = prompt("Ingrese el tipo de cobertura (terceros, terceros_completo, todo_riesgo): ").toLowerCase();
let cantidadAccidentes = parseInt(prompt("Ingrese la cantidad de accidentes en el último año: "));

 let tarifaBase = 0;
 switch (tipoCobertura) {
    case "terceros":
        tarifaBase = 45000;
        break;
    case "terceros_completo":
        tarifaBase = 70000;
        break;
    case "todo_riesgo":
        tarifaBase = 110000;
        break;
    default:
        console.log("Tipo de cobertura no válido.");
        tarifaBase = 0;
        break;
} if (edadConductor < 25) {
        console.log("Se aplicará un recargo del 20% por ser menor de 25 años.");
        tarifaBase *= 1.2;  
    }else if (cantidadAccidentes === 0) {
        console.log("Se aplicará un descuento del 10% por no tener accidentes en el último año.");
        tarifaBase *= 0.9;  
    }if (cantidadAccidentes >= 3 && tipoCobertura === "todo_riesgo") {
    console.log("No se puede contratar la cobertura 'todo_riesgo' debido a su historial de accidentes.");
    tarifaBase *=1.3; 
}
*/

//Ejercicio 3 – Calculadora de Liquidación de Sueldos con Escala de Impuestos
//Desarrollar la lógica de liquidación salarial para un empleado calculando retenciones de ley e Impuesto a las Ganancias sobre el sueldo bruto.
//Requerimientos:
//Solicitar el Sueldo Bruto del trabajador mediante prompt().
//Retenciones fijas obligatorias:
//Jubilación: 11%
//Obra Social: 3%
//Ley 19.032: 3%
//Cálculo del Impuesto a las Ganancias sobre el Sueldo Neto Provisorio (Bruto - Retenciones Fijas):
//Hasta $1.200.000 ARS: Exento (0%).
//Entre $1.200.001 y $2.000.000 ARS: 15% sobre el excedente de $1.200.000.
//Más de $2.000.000 ARS: $120.000 base + 25% sobre el excedente de $2.000.000.
//Imprimir en console.log() el detalle del recibo: Sueldo Bruto, Descuentos de Ley, Retención de Ganancias y Sueldo Neto Final.
/*
let sueldoBruto = parseInt(prompt("Ingrese el Sueldo Bruto del trabajador: "));
let jubilacion = sueldoBruto * 0.11;
let obraSocial = sueldoBruto * 0.03;
let ley19032 = sueldoBruto * 0.03;
let sueldoNetoProvisorio = sueldoBruto - jubilacion - obraSocial - ley19032;
if (sueldoNetoProvisorio <= 1200000) {
    console.log("Sueldo Neto Provisorio: $" + sueldoNetoProvisorio + " - Exento de Impuesto a las Ganancias.");
    console.log("Sueldo Neto Final: $" + sueldoNetoProvisorio);
} if (sueldoNetoProvisorio > 1200001 && sueldoNetoProvisorio <= 2000000) {
    let impuestoGanancias = (sueldoNetoProvisorio - 1200000) * 0.15;
    let sueldoNetoFinal = sueldoNetoProvisorio - impuestoGanancias;
    console.log("Sueldo Neto Provisorio: $" + sueldoNetoProvisorio);
    console.log("Retención de Ganancias: $" + impuestoGanancias);
    console.log("Sueldo Neto Final: $" + sueldoNetoFinal);
}else {
    let impuestoGanancias = 120000 + (sueldoNetoProvisorio - 2000000) * 0.25;
    let sueldoNetoFinal = sueldoNetoProvisorio - impuestoGanancias;
    console.log("Sueldo Neto Provisorio: $" + sueldoNetoProvisorio);
    console.log("Retención de Ganancias: $" + impuestoGanancias);
    console.log("Sueldo Neto Final: $" + sueldoNetoFinal);
}
*/

//Ejercicio 4 – Tarificador Dinámico de Plataforma de Transporte
//Una aplicación de viajes determina la tarifa de un recorrido aplicando multiplicadores según la demanda del momento y la franja horaria.
//Requerimientos:
//Solicitar mediante prompt(): Distancia en kilómetros, Tiempo estimado en minutos y Nivel de demanda ("baja", "media", "alta").
//Valores base: Bajada de bandera = $800 ARS, Costo por km = $350 ARS, Costo por minuto = $80 ARS.
//Estructura de multiplicador de demanda (switch):
//"baja": Factor 1.0
//"media": Factor 1.3
//"alta": Factor 1.8
//Si la distancia es superior a 20 km, se cobra un recargo fijo de peaje de $1.500 ARS.
//Mostrar mediante alert() el costo estimado total del viaje.



let distanciaKm = parseFloat( prompt("Ingrese la distancia del viaje en kilómetros: "));

let tiempoMinutos = parseFloat(prompt("Ingrese el tiempo estimado del viaje en minutos: "));

let nivelDemanda = prompt("Ingrese el nivel de demanda (baja, media, alta): ").toLowerCase();

let tarifaBase = 800 + (distanciaKm * 350) + (tiempoMinutos * 80);

let factorDemanda;

let tarifaTotal;

switch (nivelDemanda) {
    case "baja":
        factorDemanda = 1.0;
        break;

    case "media":
        factorDemanda = 1.3;
        break;

    case "alta":
        factorDemanda = 1.8;
        break;

    default:
        console.log("Nivel de demanda no válido.");
        break;
}

if (factorDemanda !== undefined) {

    tarifaTotal = tarifaBase * factorDemanda;

    if (distanciaKm > 20) {
        tarifaTotal += 1500;
    }

    console.log("Factor de demanda aplicado: " + factorDemanda);
    console.log("El costo estimado total del viaje es: $" + tarifaTotal);
}