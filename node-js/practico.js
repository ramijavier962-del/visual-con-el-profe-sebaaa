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
