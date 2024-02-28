class JuegoAdivinanza{
    constructor(){
        this.numeroSecreto=Math.floor(Math.random()*100);
        this.intentos=0;

    }
    // funcion
    adivinar(){
        this.intentos++;
        if(numerp === this.numerSecreto){
            return "Felicidades, Has adinivado el numero secreto" +this.intentos + "intentos";
        } else if (numero<this.numeroSecreto){
            return "El numero secreto es mayor";
        } else {
            return "El numero secreto es menor";
        }
    }
}

// objeto guess adivinar/ attemps intentos /message mensajes
    let juego=new JuegoAdivinanza();

    function adivinar(){
        let guess=document.getElementById("guessInput").value;
        let message=document.getElementById("message").value;
        let attempts=document.getElementById("attempts").value;
        
        if(guess===""|| isNaN(guess)){
            message.innerText="Ingrese un numero valido";

        } else {
            let result=juego.adivinar(parseInt(guess));
            message.innerText=result;
            attempts.innerText="Intentos: " +juego.intentos;
        }

    }