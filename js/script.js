const rowElem = document.querySelector(".row");
console.log(rowElem);

let gridString = "";
for (let i = 1; i <= 100; i++) {
    // Ad ogni iterazione creo una cella con il numero
    let result;
    //creo le tre costanti che andranno a sostituire il valore del numero
    //fizz per i numeri multipli di 3
    const fizz = "fizz";
    //buzz per i numeri multipli di 5
    const buzz = "buzz";
    //fizzBuzz per i numeri multipli di 3 e 5
    const fizzBuzz = "fizzBuzz";
    //none per i numeri che non sono multipli ne di 3 e ne di 5
    const none = "none";
    //verifico se il numero sia multiplo di 3 e 5
    if((i % 3 === 0)&&(i % 5 === 0)) {
        //imposto la classe a fizzBuzz e invio il risultato
        result = fizzBuzz;
        gridString += `<div class="square ${result}">${fizzBuzz}</div>`
    }else
        //verifico se sia multiplo solo di 3 
        if(i % 3 === 0){
        //imposto la classe a fizz e invio il risultato
        result = fizz;
        gridString += `<div class="square ${result}">${fizz}</div>`
    }else 
        //verifico se sia multiplo solo di 5
        if(i % 5 === 0){
        //imposto la classe a buzz e invio il risultato
        result = buzz;
        gridString += `<div class="square ${result}">${buzz}</div>`
    }else{
        //non essendo multiplo di nessuno dei due lo scrivo normalmente
        result = none;
        gridString += `<div class="square ${result}">${i}</div>`
    }
    console.log(`iterazione ${i}`, gridString);
}

// Scrittura del valore finale in HTML
// Quest osuccede dopo la fine del ciclo for, quindi dopo aver eseguito tutti i 100 iterazioni
rowElem.innerHTML = gridString;