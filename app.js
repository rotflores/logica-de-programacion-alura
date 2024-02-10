let numeroSecreto = 0;
let intentos = 0;
let listaDeNumeros = [];
let maximoNumero = 100;

function asignarTextos(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumero(){ 
    let numeroGenerado = Math.floor(Math.random()*maximoNumero)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumeros);

    if (listaDeNumeros.length == maximoNumero){
        asignarTextos("p", 'Todos los numeros han sido sorteados');
    } else {
        if(listaDeNumeros.includes(numeroGenerado)){
        return generarNumero()
    } else {
        listaDeNumeros.push(numeroGenerado);
        return numeroGenerado;
    }
}
    
}

function intentarAdivinar(){
    let inputUsuario = parseInt(document.getElementById("intento").value);
    if (inputUsuario == numeroSecreto){
        asignarTextos("p", `felicidades! has atinado al numero en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`);
        document.getElementById("reinciar").removeAttribute('disabled');
    } else {
        if (inputUsuario > numeroSecreto) {
            asignarTextos("p", "intenta con un numero mas chico");
        } else {
            asignarTextos ("p", "intenta con un numero mas grande");
        }
        intentos++;
        limpiar();
    }
    return
}

function parametrosDelJuego() {
asignarTextos("h1" , "Juego de adivinar el numero");
asignarTextos("p", `Escoge un numero del 1 al ${maximoNumero}`);
numeroSecreto = generarNumero();
intentos = 1;
}


function limpiar() {
    document.getElementById("intento").value = "";
}

parametrosDelJuego();

function reinicarJuego() {
    parametrosDelJuego();
    limpiar();
    document.getElementById("reinciar").setAttribute('disabled', 'true');
}