# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que **el éxito no se mide por cuánto tiempo te toma aprender**, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?
Es un espacio reservado en memoria que nos permite almacenar información. 

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
Cuando declaramos simplemente nombramos la variable, sin indicarle su valor. 
Cuando inicializamos una variable indicamos el tipo de dato e información que va a almacenar.


- ¿Cuál es la diferencia entre sumar números y concatenar strings?
Al  sumar números estamos realizando una operación matemática con dos datos de tipo number 
Al concatenar estamos uniendo dos o mas datos de tipo string

- ¿Cuál operador me permite sumar o concatenar?
Operador de suma +

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre : string
Apellido : string 
Nombre de usuario en Platzi: string
Edad : number
Correo electrónico: string
Mayor de edad: boolean
Dinero ahorrado: number 
Deudas: number 

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```js
let nombre = 'Ariadna';
let apellido = 'Barreto'; 
let userName = 'ariadnabonive';
let edad = 28;
let email = 'ariadnabonive@gmail.com';
let mayorEdad = true;
let ahorros = 1000;
let deudas = 500; 
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

```js
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

let dineroReal = ahorros - deudas;
console.log(dineroReal);
```


## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
Una función es un bloque de código que realiza alguna operación y que podemos reutilizar y ejecutar en el futuro.

- ¿Cuándo me sirve usar una función en mi código?
Cuando queremos reutilizar una porción de código sin volver a escribirlo, sirve para organizar el código y hacerlo más legible. 

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function nombreCompleto(name,lastname) {
    return name + ' ' + lastname;
}

function saludo (name, lastname, nickname ) {
    const completeName = nombreCompleto(name, lastname);

    return 'Hola, mi nombre es ' + completeName + 'pero me puedes decir ' + nickname;
}

console.log(saludo('juan', 'manuel', 'juanma'));
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
Es una estructura que permite elegir entre la ejecución de una acción u otra.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
if … else
switch

- ¿Puedo combinar funciones y condicionales?
Sí, las funciones pueden encapsular cualquier bloque de código incluidas condicionales.

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
//switch
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//if, else, if else
function conseguirSuscripcion(suscripcion){
    if (suscripcion == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    } else if (suscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    } else if(suscripcion == "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    } else if(suscripcion == "ExpertPlus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    } 
    console.warn("Ese tipo de suscripción no existe");
}
conseguirSuscripcion('kkkk');

```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

```js
//if 
const tiposDeSuscripciones = {
    Free: 'Solo puedes tomar los cursos gratis.', 
    Basic:'Puedes tomar casi todos los cursos de Platzi durante un mes.', 
    Expert:'Puedes tomar casi todos los cursos de Platzi durante un año.',
    ExpertPlus:'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año.'
}
    
function conseguirTipoSuscripcion(suscripcion) {
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn("Ese tipo de suscripción no existe");
}

conseguirTipoSuscripcion('Free');
```
## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
Un ciclo es un bucle que se repite hasta que se cumpla una condición.

- ¿Qué tipos de ciclos existen en JavaScript?
Existen varios tipos de ciclos, ente los cuales los más utilizados son el for y el while

- ¿Qué es un ciclo infinito y por qué es un problema?
Es un ciclo que no termina nunca su ejecución, es un problema ya que su condición y su lógica nunca se cumplen. 

- ¿Puedo mezclar ciclos y condicionales?
Sí, podemos condicionar un ciclo para que se repita todas las veces hasta que se cumplan una condición que internamente puede tener otra condición para su evaluación.


### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
//for
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}


for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//while

let i = 0;
while (i<5) {
    console.log(`El valor de i es: ${i}`)
    i++;
}

let i = 10;
while( i>= 2) {
    console.log(`El valor de i es: ${i}`)
    i--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
> 💡 Pista: puedes usar la función prompt de JavaScript.

```js
let response = prompt('¿Cuánto es 2 + 2?');

if(response == 4) {
alert('Felicidades, sabes sumar.');
} else {
alert('Lo siento,no es la respuesta correcta.')
}
```


## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
Es una colección ordenada de datos.

- ¿Qué es un objeto?
Es una colección de elementos, donde cada elemento tiene una clave y un valor. 

- ¿Cuándo es mejor usar objetos o arrays?
Es recomendable usar objetos cuando el conjunto de elementos es muy grande o se relaciona con distintas variables. 

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Si.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```js
let numeros=["uno", "dos", "tres"];

 function firstElementArray(array){
     return console.log(array[0]);
   }

   firstElementArray(numeros);
```


### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```js
let frutas =["manzana", "pera", "mango"];
let colores=[ "amarillo", "azul", "rojo"];

function recorrerArray(array) {
  for(let elemento of array){
    console.log(`${elemento}`);
  }
}
recorrerArray(colores);
```


### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
```js
/forma 1
let persona = {
    nombre:'Ariadna',
    edad:29,
    hijos: false
}

function elementoPorElemento(objeto){
    const array = Object.values(objeto);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

elementoPorElemento(persona)


// forma2
let mascota = {
    nombre:'Baco',
    edad:4,
    sexo: 'Macho'
}

function mostrarObjeto(objeto){
    for(const key in objeto){
        console.log(`${objeto[key]}`);
    }
}

mostrarObjeto(mascota)
```

## ¿Cómo te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**

¡Te espero en la siguiente clase para comenzar!
