 // Wait for DOM to finish loading to start quotes
 document.addEventListener("DOMContentLoaded" , function() {

    let quotes = [
        "When someone attacks one party member we all roll for initiative" ,
        "If you come any closer you'll have to roll initiative" ,
        "Who needs gender roles when we can have initiative rolls" , 
        "Things we say that will always start a fight: Roll for initiative" ,
        "I don't take initiative, I roll it!" ,
        "Welcome to my neighbourhood. Roll for initiative" , 
        "The players just went into a dark alley. Roll initiative" , 
        "The party settling down for a rest....'Roll for initiative'" , 
        "When you just walked into an empty room and the DM says: 'Roll for initiative...'"
    ];
    
    // Select one random quote from the 'quotes' array and display selected quote inside h2 element
    function loadRandomQuote() {
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById("quoteBox").innerHTML = randomQuote;
    }

    // Excute this function every 3sec
    setInterval(function() {
        loadRandomQuote(); 
    },3000);
});

// Wait for the click event to roll for initiative
 let initiativeRoll = document.getElementById("rollInitiative");
 initiativeRoll.addEventListener("click" , function() {
     
    let diceRoll = Math.floor(Math.random() * 20) + 1; //returns a random number between 1 - 20
    let initiativeModifier = document.getElementById("modifier").valueAsNumber; // identify initiative modifier
    let yourInitiative = diceRoll + initiativeModifier; // sum the random d20 roll with the initiative modifier
    
    let initiativeHistory = [];//creates an empty array for the initiative history

        // Display message if user does not add an initiative modifier
        if (isNaN(initiativeModifier)) {
            document.getElementById("initiative").innerHTML = "Please add your initiative modifier";
        } else { 
            document.getElementById("initiative").innerHTML = yourInitiative; // Display initiative value  
            document.getElementById("initiative").setAttribute("class", "number-big"); // Style initiative value  
            document.getElementById("history-box").classList.remove("hidden"); // Display initiative history box  

            // Create a initiative log history
            let initiatives = yourInitiative + "= d" + diceRoll + "+" + initiativeModifier + ", ";
            let li = document.createElement("li");
            let list = document.getElementById("initiative-history-list");
            list.prepend(li); // add a new list item to the end of the list 

            initiativeHistory.push(initiatives); // add initiative to initiativeHistory array
            li.textContent += initiativeHistory[initiativeHistory.length - 1];

            let listLenght = list.getElementsByTagName("li").length;
            console.log(listLenght); // Log amount of initiative rolls into console

            //Remove the earlier initiative rolls from history after 10 rolls
            if (listLenght > 7){
                list.removeChild(list.lastElementChild);
            }
            
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
    ];

    // Based on your initiative, display the corresponding gif
    if (yourInitiative <= 0) {
        document.getElementById("resultGif").setAttribute("src", "assets/images/gifs/-0.gif");
    } else if (yourInitiative >= 1 && yourInitiative <= 19) {
        document.getElementById("resultGif").setAttribute("src", gifs[yourInitiative]);
    } else if (yourInitiative >= 20){
        document.getElementById("resultGif").setAttribute("src", "assets/images/gifs/20.gif");
    }

});


