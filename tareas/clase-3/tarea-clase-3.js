// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/*
const preguntarNombreUsuario = prompt("Cómo es tu nombre");
const miNombre = "Camilo";
const nombreDeMiHermano = "Lautaro";

if (preguntarNombreUsuario.toLowerCase() === miNombre.toLowerCase()) {
    console.log(`Hola, Tocayo! También me llamo ${miNombre}`)
} else if (preguntarNombreUsuario.toLowerCase() === nombreDeMiHermano.toLowerCase()) {
    console.log(`Hola! Te llamás igual que mi hermano!`)
} else { 
    console.log(`Hola ${preguntarNombreUsuario}`)
}
*/

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/*
const preguntarEdadUsuario = Number(prompt("Qué edad tenés?"));
let miEdad = 25;

if (preguntarEdadUsuario === miEdad) {
    console.log("Tenemos la misma edad!")
} else if (preguntarEdadUsuario < miEdad) {
    console.log(`Tengo ${miEdad}! Soy mayor que vos`)
} else if (preguntarEdadUsuario > miEdad) {
    console.log(`Ah! Soy menor que vos, tengo ${miEdad}`)
}
*/

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

/*
const preguntarPorDNI = prompt("Tenés DNI?")
const respuestaUsuarioPositiva = "Si";
const respuestaUsuarioNegativa = "No";

function autorizarEntradaAlBar(){
    const preguntarEdadUsuario = Number(prompt("Cuántos años tenés?"))
    const edadMinimaParaBar = 18;

    if (preguntarEdadUsuario >= edadMinimaParaBar) {
        return "Podés pasar!"
    } else if (preguntarEdadUsuario < edadMinimaParaBar){
        return "No podés pasar, sos menor de edad!!";
    } else {
        return "No se entiende la respuesta!";
    }
}

if (preguntarPorDNI.toLowerCase() === respuestaUsuarioPositiva.toLowerCase()) {
    console.log(autorizarEntradaAlBar());
} else if (preguntarPorDNI.toLowerCase() === respuestaUsuarioNegativa.toLowerCase()) {
    console.log("Sin DNI no podés pasar!!");
}else {
    console.log("No se entendió tu respuesta!");
}

*/

/*
let preguntarPorDNI = (prompt("Tenés DNI?") || "").toLowerCase();
const RESPUESTA_USUARIO_POSITIVA = ("Si").toLowerCase();
const RESPUESTA_USUARIO_NEGATIVA = ("No").toLowerCase();

function autorizarEntradaAlBar() {
    const PREGUNTAR_EDAD_USUARIO = (Number(prompt("Cuántos años tenés")) || "");
    const EDAD_MINIMA_PARA_BAR = 18;

    if (PREGUNTAR_EDAD_USUARIO >= EDAD_MINIMA_PARA_BAR) {
        return "Podés pasar!";
    } else if (PREGUNTAR_EDAD_USUARIO.length === 0) {
        return "No ingresaste una respuesta";
    } else if(PREGUNTAR_EDAD_USUARIO < EDAD_MINIMA_PARA_BAR) {
        return "No podés pasar, sos menor de edad!"
    } else {
        return "No se entiende la respuesta";
    }
}

if (RESPUESTA_USUARIO_POSITIVA === preguntarPorDNI) {
    console.log(autorizarEntradaAlBar());
} else if (RESPUESTA_USUARIO_NEGATIVA === preguntarPorDNI) {
    console.log("Sin DNI no podés pasar!");
} else if (preguntarPorDNI.trim().length === 0) {
    console.log("No ingresaste una respuesta!");
} else {
    console.log("No se entendió la respuesta!");
}
*/

let foo = 5;

function addTwo(num) {
    return num += 2;
}

function addTwo_v2(foo) {
    return foo += 2
}

console.log(foo);
console.log(addTwo(foo));
console.log(foo);
console.log(addTwo_v2(foo));
console.log(foo);