/* creamos una funcion y utilizamos el metodo math random para que sea aleatorio  */

function getRandomArbitrary(min,max) {
    return Math.random ()*(max-min) + min;
}
/* creamos una variable para q el metodo Math le asigne un valor aleatorio indicandole el rango 
en el que debe trabajar y otra para convertir ese numero en un elemento del juego. 
Aquí trabajamos con la jugada de la pc */

let jugadaPc = Math.floor (getRandomArbitrary(0,2));
let jugadaTraducida;

if (jugadaPc === 0){
    jugadaTraducida ="piedra";
}else if
    (jugadaPc===1){
    jugadaTraducida ="tijera";
    }else
    {
        jugadaTraducida = "papel";
    }
//creamos tres constantes diferentes y luego mediante el método queryselector vinculamos cada una de ellas 
//con su respectivo botón//

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

//creamos una variable para la jugada del competidor de la pc//
 let jugadaCompetidor; 

 // Enlazo el boton 1 con el evento click y le paso como función una arrow function//
 btn1.addEventListener("click", () => {
	// Lo primero que hago es imprimir en consola competidor jugó tijera
	console.log("Competidor jugó tijera");
    //creo un condicional y evaluo
	// si jugadaTraducida es piedra
	if (jugadaTraducida === "piedra") {
		// entonces imprimo en consola  la pc jugó piedra y perdiste
		console.log("la pc jugo piedra, perdiste");
        // si no se produjo la condicion anterior entonces evaluo si es igual a tijera

		// si es igual tijera entra en la condicion
	} else if (jugadaTraducida === "tijera") {
		// imprime en consola empate
		console.log("la pc jugo tijera, empate");
		// Si no jugo ninguno de los anteriores ENTONCES por descarte si o si va a ingresar en que jugó papel
	} else {
		// imprimo en consola jugó papel
		console.log("la pc jugó papel, sos el ganador");
	}
});

//Enlazo el botón 2 con el evento click y le paso como funcion una arrow function//
btn2.addEventListener("click",()=>{
	//imprimo en consola que el competidor jugó piedra//
	console.log ("El competidor jugó piedra");
	//creo un condicional y evaluo si jugadaTraducida es piedra
	//imprimo en consola empate//
	if (jugadaTraducida === "piedra") {
		console.log ("la pc jugó piedra es empate");
		//si no se produjo la condicion anterior entonces evaluo la condicion siguiente si es 
		//igual a tijera//
	} else if (jugadaTraducida === "tijera") {
		//entonces imprimo en consola//
       console.log ("La pc jugó tijera, GANASTE");
	   // si no sucede ninguna de las anteriores Entonces ingresa en esta última condición//
	//Indicando al competidor perdió//
	}else {
		 console.log("La pc jugó papel, Perdiste ");
	}
	
});
// Enlazo el botón 3 con el evento click y le paso como funcion una arrow function//
btn3.addEventListener("click",()=> {
//imprimo en consola que elcompetidor jugó papel//
console.log("El competidor jugó papel");	
//creo un condicional y evaluo jugada traducida es piedra//
//imprimo en consola que el competidor ganó//
if(jugadaTraducida === "piedra"){
	console.log ("Ganaste");
	//si la primer condicion no se cumple Entonces evaluamos la siguiente, es el caso que la pc saque tijera//
}else if (jugadaTraducida ==="tijera") {
	console.log ("La pc jugo tijera, fuiste cortado");
	//si ninguna de las anteriores se cumple entonces es un empate y se imprime eso en consola//
}else{
console.log("La pc jugó papel, es un empate")
}
});

