function asignarTextos(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

asignarTextos("h1" , "Juego de adivinar el numero");
asignarTextos("p", "Escoge un numero del 1 al 10");

