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

/*
*/

//Ejercicio 5 – Evaluador de Categoría Tributaria (Monotributo)
//Un sistema contable debe evaluar los parámetros ingresados para determinar la categoría del Monotributo correspondiente al contribuyente.
//Requerimientos:
//Solicitar: Ingresos brutos anuales (ARS) y Superficie afectada (m^2).
//Escala simplificada de evaluación (se asigna la categoría que cumpla ambos criterios; de superar alguno, salta a la siguiente):
//Categoría A: Hasta $6.000.000 ARS e ingresos y hasta 30 m^2.
//Categoría B: Hasta $12.000.000 ARS e ingresos y hasta 45 m^2.
//Categoría C: Hasta $18.000.000 ARS e ingresos y hasta 85 m^2.
//Régimen General: Si supera los $18.000.000 ARS o los 85 m^2.
//Informar por pantalla la categoría asignada mediante alert().
/*
*/

//Ejercicio 6 – Scoring Crediticio para Pre-Aprobación de Créditos
//Una entidad bancaria evalúa solicitudes de crédito personal aplicando un algoritmo de puntuación estricto.
//Requerimientos:
//Solicitar mediante prompt(): Ingreso mensual neto, Antigüedad laboral en años, Historial de deudas pendientes ("si" o "no") y Monto del crédito solicitado.
//Condiciones de aprobación (deben evaluarse secuencialmente):
//Si posee deudas pendientes ("si"), el crédito queda Rechazado automáticamente.
//La antigüedad laboral debe ser de al menos 1 año.
//La cuota mensual estimada (monto solicitado dividido en 12 meses con un 30% de interés fijo) no puede superar el 30% del ingreso mensual neto.
//Mostrar con alert() si la solicitud fue Pre-Aprobada o Rechazada, detallando el motivo exacto en caso de rechazo.
/*
*/

//Ejercicio 7 – Simulador de Cajero Automático con Validación de Extracciones
/*
        */

//Ejercicio 8 – Motor de Descuentos en Comercio Electrónico
//Un e-commerce aplica un sistema de promociones acumulativas o excluyentes según el cupón y la membresía del cliente.
//Requerimientos:
//Solicitar: Monto total del carrito, Categoría del usuario ("Bronce", "Plata", "Oro") y Código de descuento ingresado ("DESC10", "SUPER20", o ninguno).
//Reglas:
//Descuento por membresía: "Plata" obtiene 5%, "Oro" obtiene 15%.
//Descuento por cupón (switch):
//"DESC10": 10% adicional.
//"SUPER20": 20% adicional (solo aplicable a compras mayores a $50.000 ARS).
//Si la compra final supera los $100.000 ARS, se otorga envío gratis; de lo contrario, se suman $4.500 ARS en concepto de flete.
//Mostrar en console.log() el detalle del descuento aplicado, costo de envío y total neto a pagar.
/*
let montoCarrito = parseFloat(prompt("Ingrese el monto total del carrito (ARS): "));
let categoriaUsuario = prompt("Ingrese la categoría del usuario (Bronce, Plata, Oro): ").toLowerCase();
let codigoDescuento = prompt("Ingrese el código de descuento (DESC10, SUPER20, ninguno): ").toUpperCase();
 let descuentoCupon = 0;
 let descuentoMembresia = 0;


if(categoriaUsuario === "bronce") {
    descuentoMembresia = 0;}
if(categoriaUsuario === "plata") {
    descuentoMembresia = 0.05;}
if(categoriaUsuario === "oro") {
    descuentoMembresia = 0.15;}
   

    switch (codigoDescuento) {
        case "DEC10":
             descuentoCupon = 0.10;
            break;
        case "SUPER20":
            if (montoCarrito > 50000) {
                descuentoCupon = 0.20;}
            break;
        case "NINGUNO":
            descuentoCupon = 0;
    }
    if (montoCarrito > 100000) {
        console.log("Envío gratis aplicado.");
    }else {
        let costoEnvio = 4500;
        console.log("Costo de envío: $" + costoEnvio);
    }
    console.log("Descuento por membresía: " + (descuentoMembresia * 100) + "%");
    console.log("Descuento por cupón: " + (descuentoCupon * 100) + "%");
    console.log("Total neto a pagar: $" + (montoCarrito * (1 - descuentoMembresia) * (1 - descuentoCupon)));
*/

//Ejercicio 9 – Sistema de Triaje para Urgencias Médicas
//Un centro de salud utiliza un algoritmo de triaje para priorizar la atención de pacientes en la guardia médica según sus síntomas.
//Requerimientos:
//Solicitar mediante prompt(): Dificultad para respirar ("si" / "no"), Nivel de dolor del 1 al 10 y Presión arterial sistólica (mm Hg).
//Categorización:
//Nivel Rojo (Atención Inmediata): Si presenta dificultad para respirar O si la presión es mayor a 180.
//Nivel Amarillo (Urgencia Media): Si no es nivel rojo, pero el nivel de dolor es mayor o igual a 7 O la presión está entre 140 y 180.
//Nivel Verde (Consulta Baja Prioridad): En cualquier otro caso.
/*
let dificultadRespirar = prompt("¿Presenta dificultad para respirar? (si/no): ").toLowerCase();
let nivelDolor = parseInt(prompt("Ingrese el nivel de dolor del 1 al 10: "));
let presionArterial = parseInt(prompt("Ingrese la presión arterial sistólica (mm Hg): "));
if (dificultadRespirar === "si" || presionArterial > 180) {
    console.log("Nivel Rojo: Atención Inmediata.");
     console.log("Tiempo máximo de espera: Inmediato.");
} else if (nivelDolor >= 7 || (presionArterial >= 140 && presionArterial <= 180)) {
    console.log("Nivel Amarillo: Urgencia Media.");
     console.log("Tiempo máximo de espera: 30 minutos.");
} else {
    console.log("Nivel Verde: Consulta Baja Prioridad.");
     console.log("Tiempo máximo de espera: 2 horas.");
}

*/
//Ejercicio 10 – Conversor Monetario con Ajuste por Inflación e Impuestos
//Un simulador financiero permite calcular la conversión de divisas aplicando cotizaciones, comisiones de intercambio y una proyección de inflación mensual.
//Requerimientos:
//Solicitar mediante prompt():
//Monto en Pesos Argentinos (ARS).
//Moneda de destino ("USD", "EUR", "BRL").
//Meses de proyección de inflación (entero entre 1 y 12).
//Cotizaciones fijas: 1{ USD} = 1.300{ ARS}, 1{ EUR} = 1.420{ ARS}, 1{ BRL} = 220{ ARS}.
//Reglas de cálculo:
//Aplicar mediante un switch el tipo de cambio seleccionado.
//Cobrar una comisión del 2% por el servicio de cambio.
//Estimar la pérdida de poder adquisitivo del saldo en ARS calculando un 4% de inflación mensual acumulada simple sobre la cantidad de meses ingresada ({Monto} \times (1 + 0.04 \times{meses})).
//Mostrar por consola el monto recibido en la divisa extranjera y el valor equivalente proyectado por la inflación.

let montoARS = parseFloat(prompt("Ingrese el monto en Pesos Argentinos (ARS): "));
let monedaDestino = prompt("Ingrese la moneda de destino (USD, EUR, BRL): ").toUpperCase();
let mesesInflacion = parseInt(prompt("Ingrese los meses de proyección de inflación (1-12): "));
let montoConvertido = 0;
const cotizaciones = {
    USD: 1300,
    EUR: 1420,
    BRL: 220
};
switch (monedaDestino) {
    case "USD":
        montoConvertido = montoARS / cotizaciones.USD;
        break;
    case "EUR":
        montoConvertido = montoARS / cotizaciones.EUR;
        break;
    case "BRL":
        montoConvertido = montoARS / cotizaciones.BRL;
        break;
    default:
        console.log("Moneda de destino no válida.");
        break;
}
console.log("Monto convertido antes de comisión: " + montoConvertido.toFixed(2) + " " + monedaDestino);
let montoConComision = montoConvertido * 0.98;
console.log("Monto convertido después de comisión del 2%: " + montoConComision.toFixed(2) + " " + monedaDestino);
let inflacionAcumulada = montoARS * (1 + 0.04 * mesesInflacion);
console.log("Valor equivalente proyectado por inflación en ARS: $" + inflacionAcumulada.toFixed(2));    