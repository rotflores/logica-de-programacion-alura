let numeroSecreto = generarNumero();
let intentos = 1;
console.log(numeroSecreto);
console.log(intentos);
function asignarTextos(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

asignarTextos("h1" , "Juego de adivinar el numero");
asignarTextos("p", "Escoge un numero del 1 al 100");

function generarNumero(){ 
    return Math.floor(Math.random()*100)+1;
}

function intentarAdivinar(){
    let inputUsuario = parseInt(document.getElementById("intento").value);
    console.log(numeroSecreto);
    if (inputUsuario == numeroSecreto){
        asignarTextos("p", `felicidades! has atinado al numero en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`);
        document.getElementById("reinciar").removeAttribute(`disabled`);
    } else {
        if (inputUsuario > numeroSecreto) {
            asignarTextos("p", "intenta con un numero mas chico");
        } else {
            asignarTextos ("p", "intenta con un numero mas grande");
        }
    }
    intentos++;
    return
}

