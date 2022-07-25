let userName = 'ariadnabonive';
let edad = 28;
let email = 'ariadnabonive@gmail.com';
let mayorEdad = true;


let nombre = 'Ariadna';
let apellido = 'Barreto'; 
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);


let ahorros = 1000;
let deudas = 500; 
let dineroReal = ahorros - deudas;
console.log(dineroReal);

//funciones

function nombreCompleto(name,lastname) {
    return name + ' ' + lastname + ' ';
}

function saludo (name, lastname, nickname ) {
    const completeName = nombreCompleto(name, lastname);

    return 'Hola, mi nombre es ' + completeName + 'pero me puedes decir ' + nickname;
}

console.log(saludo('juan', 'manuel', 'juanma'));