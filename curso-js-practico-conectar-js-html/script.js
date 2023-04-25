const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');

form.addEventListener('submit', sumarInputValues);
//btn.addEventListener('click', btnOnClick);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
  //console.log('Escuchando el evento clic');
  //console.log(+input1.value + +input2.value);
  const sumaInputs = +input1.value + +input2.value;
  pResult.innerText = "Resultado: " + sumaInputs
}
