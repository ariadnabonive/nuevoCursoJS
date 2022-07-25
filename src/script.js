// const h1 = document.querySelector('h1');
// const p = document.querySelectorAll('p');
// const pClass = document.getElementsByClassName('parrafoClass');
// const pID = document.getElementById('parrafoID') ;


// console.log({
//     h1, 
//     p, 
//     pClass,
//     pID,
// });

// h1.innerHTML = "Modificando el html con inner";

// const img = document.createElement('img');
// img.setAttribute('src', 'https://static.platzi.com/media/avatars/platziteam_8cfe6fc7-1246-4c9a-9f5d-d10d467443ee.png')
// console.log(img);

// pID.append(img);
//
//.innerHTML
//.getAttribute('class') inspeccionar si en ese elemento existe el atributo class
//.classList.add('claseAgregada')
//.classList.remove('claseRemovida')

//.classList.toggle('claseRemovida')
//.classList.contains('claseRemovida')
//document.createElement('img')

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnSumar = document.querySelector('#btnSuma');
const btnRestar = document.querySelector('#btnResta');
const btnMultiplicar = document.querySelector('#btnMulti');
const btnDividir = document.querySelector('#btnDivi');
const result = document.querySelector('#result');

btnSumar.addEventListener('click', btnSuma);
btnRestar.addEventListener('click', btnResta);
btnMultiplicar.addEventListener('click', btnMultiplica);
btnDividir.addEventListener('click', btnDivide);

function btnSuma() {
    const sumaInputs= parseInt(input1.value) + parseInt(input2.value);
    result.innerText = 'El resultado de la suma es: ' + (sumaInputs);
}

function btnResta() {
    const restaInputs= parseInt(input1.value) - parseInt(input2.value);
    result.innerText = 'El resultado de la resta es: ' + (restaInputs);
}

function btnMultiplica() {
    const multiInputs = parseInt(input1.value) * parseInt(input2.value);
    result.innerText = 'El resultado de la multiplicación es: ' + (multiInputs);
}

function btnDivide() {
    const diviInputs = parseInt(input1.value) / parseInt(input2.value);
    result.innerText = 'El resultado de la división es: ' + (diviInputs);
}
