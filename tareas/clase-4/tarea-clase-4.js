// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

function imprimirCadaTresNumeros() {
    for(i = 3; i <= 22; i += 3) {
        console.log(i);
    }
}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.


function contarDelDiezAlUno() {
    let numero = 10; 
    while (numero >= 1) {
        console.log(numero);
        
        numero -= 1
    }    
}


// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

// function fizzBuzz() {
//     for(i = 1; i <= 50; i++){
//         if (i % 3 === 0 && i % 5 === 0){
//             console.log("FizzBuzz")
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0){
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

//Hecho por el profe
function fizzBuzz() {
    for(i = 1; i <= 50; i++){
        let texto = "";

        if(i % 3 === 0){
            texto = "Fizz";
        }

        if(i % 5 === 0){
            texto += "Buzz";
        }

        console.log(texto || i);
    }
}

/*
EJEMPLO SACADO DE INTERNET
for(i = 1; i <= 50; i++){
    let resultado = "";

    if(i % 3 === 0){
        resultado += "Fizz";
    }
    if(i % 5 === 0){
        resultado += "Buzz";
    }

    console.log(resultado || i);
}
*/


// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])


const CALIFICACIONES = [6, 7, 10, 8, 3, 9, 2, 10];
function calcularPromedio(CALIFICACIONES) {
    let contador = 0;
    for(i = 0; i < CALIFICACIONES.length; i++){
        contador = contador + CALIFICACIONES[i];
    }
    
    let resultado = contador / CALIFICACIONES.length
    console.log(`Tu promerio es: ${resultado.toFixed(2)}`);
}



function tareas(){
    // imprimirCadaTresNumeros();
    // contarDelDiezAlUno();
    fizzBuzz();
    // calcularPromedio(CALIFICACIONES);

}

// console.log(tareas());



function sumar(n1, n2){
    return n1 + n2;
}

function restar(n1, n2){
    return n1 - n2;
}

function tareaOperador(funcionOperador, n1, n2){
    console.log(funcionOperador(n1, n2))
}

tareaOperador(sumar, 10, 5);





 



// let consultarCalificaciones = prompt("Ingresá tus calificaciones");
// const CALIFICACIONES = [];
// CALIFICACIONES.push(consultarCalificaciones);

// console.log(CALIFICACIONES);

