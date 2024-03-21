// // Crea un input, un div vacío y un array de colores.

// Cuando el usuario escriba en el input, con cada letra, debe cambiar el color de fondo de ese DIV. Cuando llegue al último color de la lista, que vuelva a empezar por el primero.

const colores = ["red", "blue", "green", "orange", "yellow"];

const texto = document.getElementById("inputTexto");
const divColores = document.getElementById("cajaColores");

texto.addEventListener('keyup', mostrarColores);

let contador = 0;

function mostrarColores(){

    if (contador < colores.length){
        divColores.style.backgroundColor = colores[contador];
        contador++;
    } else {
        contador = 0;
        divColores.style.backgroundColor = colores[contador];
        contador++;
    }

}