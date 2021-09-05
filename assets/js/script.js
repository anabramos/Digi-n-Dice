 /* Wait for DOM to finish loading to start quotes*/

 document.addEventListener("DOMContentLoaded" , function() {
    
    let form = document.getElementById("diceForm");
    form.addEventListener("submit" , function(event){
        event.preventDefault();
    });

    let quotes = [
        "When someone attacks one party member we all roll for initiative" ,
        "If you come any closer you'll have to roll initiative" ,
        "Who needs gender roles when we can have initiative rolls" , 
        "Things we say that will always start a fight: Roll for initiative" ,
        "I don't take initiative, I roll it!"
    ]

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteBox").innerHTML = randomQuote;
});

 let initiativeRoll = document.getElementById("rollInitiative");
 initiativeRoll.addEventListener("click" , function() {
 })