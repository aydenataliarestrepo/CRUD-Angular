const forElemnt = document.getElementById("saveTransaction");
const forBotton = document.getElementById("saveTransaction");

forElemnt.addEventListener("submit", (Event) => {
    Event.preventDefault();
    //Obtengo el valor de los input 
    let transactionIdUs = document.getElementById("transactionIdUs").nodeValue;
    let transactionNombre = document.getElementById("transactionNombre").nodeValue;

    //Objeto que obtiene los valores 
    let saveTransaction, { transactionIdUs: transactionIdUs, transactionNombre: transactionNombre };
    let transctionJson = JSON.stringify(transaction);


    //Enviar datos la transaccion al backend y guardar información 

    fetch('http://localhost:4200/transactions', {
        method: 'Post',
        body: transctionJson

    })

    Event

})