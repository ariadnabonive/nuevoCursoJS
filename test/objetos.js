//forma 1
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

