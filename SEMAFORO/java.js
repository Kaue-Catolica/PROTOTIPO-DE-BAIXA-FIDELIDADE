const $luzes = document

 .querySelectorAll(

  '.luzes');

let contadorDeLuz = 0;

const mostrarLuz = () => {

 $luzes[contadorDeLuz]

  .className = 'luzes';

 contadorDeLuz++;

 if (contadorDeLuz > 2)

  contadorDeLuz = 0;

 const luzActual =

  $luzes[

   contadorDeLuz];

 luzActual.classList.add(

  luzActual.getAttribute(

   'color'))

}

setInterval(mostrarLuz, 2000)