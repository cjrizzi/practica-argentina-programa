// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

/*
const anioActual = Number(prompt("En qué año estamos?"));
const anioDeNacimiento = Number(prompt("En qué año naciste?"));

function edadUsuario(anioActual, anioDeNacimiento){
    return anioActual - anioDeNacimiento;
}

const resultado = edadUsuario(anioActual, anioDeNacimiento);

console.log("Tenés " + resultado + " años!!");



// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.


const salarioAnual = Number(prompt("Cuánto ganás en el año?"));

    function calcularSalarioMensual(salarioAnual){
        const mesesEnElAnio = 12
        return salarioAnual / mesesEnElAnio;
    }

            const resultado2 = calcularSalarioMensual(salarioAnual);

                console.log("Bueno, mensualmente ganás " + "$" + resultado2.toFixed(2) + "!!");

    //salario Semanal
function salarioSemanal(resultado2){
    const cantidadSemanasDelMes = 4
    return resultado2 / cantidadSemanasDelMes;
}

    const resultadoSalarioSemanal = salarioSemanal(resultado2);

        console.log("Ok, por semana ganás " + "$" + resultadoSalarioSemanal.toFixed(2));

    //salario Diario
function salarioDiario(resultadoSalarioSemanal){
    const cantidadDiasLaborales = 5;
    return resultadoSalarioSemanal / cantidadDiasLaborales;
}

    const resultadoSalarioDiario = salarioDiario(resultadoSalarioSemanal);

        console.log("Bien, diariamente ganás  " + "$" + resultadoSalarioDiario.toFixed(2) + "!!");

    //salario Hora
function salarioPorHora(resultadoSalarioDiario){
    const horasJornada = 8;
    return resultadoSalarioDiario / horasJornada;
}

    const resultadoSalarioPorHora = salarioPorHora(resultadoSalarioDiario);

        console.log("Entonces por hora ganás unos " + "$" + resultadoSalarioPorHora.toFixed(2) + ".")

*/


/// SCOPE

// Variable hoisting -> izar
// console.log(hola); //Falla porque no está definida

// console.log(mensaje); //No falla, pero muestra undefined... por qué?
// var mensaje = 'Hola, mundo';
// console.log(mensaje); //Hola, mundo

// Y con let?
// let mensaje = 'Hola, mundo';
// console.log(mensaje); //error

// function hoisting

/*
pruebaHoisting(); //funciona!
function pruebaHoisting(){
    console.log('prueba');
}
pruebaHoisting();
*/

/*
var a = 1; //global
let b = 2; //global
let c = 10;

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función

    if(c === 3){
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6        
    }

  
    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5 por variable hoisting
    //console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error    
}

prueba(3);

console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
console.log('c vale: ' + c); // 10 porque toma el valor global de c fuera de la función
//console.log('d vale: ' + d); // error
//console.log('e vale: ' + e); // error
//console.log('f vale: ' + f); // error
*/
