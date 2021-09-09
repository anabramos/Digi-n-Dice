 // Wait for DOM to finish loading to start quotes
 document.addEventListener("DOMContentLoaded" , function() {

    let quotes = [
        "When someone attacks one party member we all roll for initiative" ,
        "If you come any closer you'll have to roll initiative" ,
        "Who needs gender roles when we can have initiative rolls" , 
        "Things we say that will always start a fight: Roll for initiative" ,
        "I don't take initiative, I roll it!"
    ]
    
        // Select one random quote from the 'quotes' array
        //let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        // Display selected quote inside h2 element
        function loadRandomQuote() {
            let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            document.getElementById("quoteBox").innerHTML = randomQuote;
        }
        // it excutes after 3sec
        setInterval(function() {
            loadRandomQuote(); 
        },3000);

});

// Wait for the click event to roll a d20 and return a random number
 let initiativeRoll = document.getElementById("rollInitiative");
 initiativeRoll.addEventListener("click" , function() {
     
    let diceRoll = Math.floor(Math.random() * 20) + 1;
    let initiativeModifier = document.getElementById("modifier").valueAsNumber;
    let yourInitiative = diceRoll + initiativeModifier
    let initiativeHistory = [];

        // Display message if user does not add an initiative modifier
        // Else, sum the random d20 roll with the initiative modifier
        if (isNaN(initiativeModifier)) {
            document.getElementById("initiative").innerHTML = "Please add your initiative modifier";
        } else {
            document.getElementById("initiative").innerHTML = yourInitiative;
            document.getElementById("initiative").setAttribute("class", "number-big");
            document.getElementById("history-box").classList.remove("hidden");

            // Create a initiative log history
            let initiatives = yourInitiative + ", ";
            let li = document.createElement("li");
            document.getElementById("initiative-history-list").prepend(li);

            initiativeHistory.push(initiatives);
            li.textContent += initiativeHistory[initiativeHistory.length - 1];
        }

        let gifs = [
        "assets/images/gifs/-0.gif",
        "assets/images/gifs/1.gif",
        "assets/images/gifs/2.gif",
        "assets/images/gifs/3.gif",
        "assets/images/gifs/4-5.gif",
        "assets/images/gifs/4-5.gif" ,
        "assets/images/gifs/6-7.gif",
        "assets/images/gifs/6-7.gif" ,
        "assets/images/gifs/8-9.gif",
        "assets/images/gifs/8-9.gif" ,
        "assets/images/gifs/10-11.gif",
        "assets/images/gifs/10-11.gif",
        "assets/images/gifs/12-13.gif" ,
        "assets/images/gifs/12-13.gif" ,
        "assets/images/gifs/14.gif" ,
        "assets/images/gifs/15.gif" ,
        "assets/images/gifs/16.gif" ,
        "assets/images/gifs/17-18.gif" ,
        "assets/images/gifs/17-18.gif" ,
        "assets/images/gifs/19.gif" ,
        "assets/images/gifs/20.gif"
    ]
    // Based on your initiative, display the corresponding gif
    if (yourInitiative <= 0) {
        document.getElementById("resultGif").setAttribute("src", "assets/images/gifs/-0.gif");
    } else if (yourInitiative >= 1 && yourInitiative <= 19) {
        document.getElementById("resultGif").setAttribute("src", gifs[yourInitiative]);
    } else if (yourInitiative >= 20){
        document.getElementById("resultGif").setAttribute("src", "assets/images/gifs/20.gif");
    }

});


