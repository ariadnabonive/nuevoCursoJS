//primer elemento
let numeros=["uno", "dos", "tres"];

 function firstElementArray(array){
     return console.log(array[0]);
   }

   firstElementArray(numeros);

//todos los elementos del array, uno por uno

let frutas =["manzana", "pera", "mango"];
let colores=[ "amarillo", "azul", "rojo"];

function recorrerArray(array) {
  for(let elemento of array){
    console.log(`${elemento}`);
  }
}
recorrerArray(colores);

