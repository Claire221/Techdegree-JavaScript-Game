const keyboard = document.getElementById("qwerty");
const phrase = document.getElementById("phrase").getElementsByTagName("UL")[0];
const startButton = document.getElementsByClassName("btn__reset")[0];
const letters = [];


let missed = 0;
// const phrases = [
//     "When the whole world is silent even one voice becomes powerful",
//     "Knowing what must be done does away with fear",
//     "I didnt get there by wishing for it or hoping for it but by working for it",
//     "You can waste your lives drawing lines. Or you can live your life crossing them",
//     "Id rather regret the things I've done than regret the things I haven't done"

// ]

const phrases = [
    "hello how are you",
    "shadow is a dog",
    "yesterday has gone",
    "elephants are big",
    "i suppose so"

];

// const phraseArray = getRandomPhraseAsArray(phrases);


startButton.addEventListener("click", startGame);

//function to start game and get rid of title screen
function startGame(){
    const gameContainer = document.getElementById("overlay");
    gameContainer.style.display = "none";

    getRandomPhraseAsArray(phrases)
};

function getRandomPhraseAsArray(arr){
    const selectQuote = Math.floor(Math.random() * arr.length);
    const chosenQuote = arr[selectQuote];

    for(var i = 0; i < chosenQuote.length; i++){
        letters.push(chosenQuote[i])
    };

    // console.log(letters)
    addPhraseToDisplay(letters)
};

// function to create li from each letter and append it to the ul
function addPhraseToDisplay(arr){
    for(var i = 0; i < arr.length; i++){
        
        // create a list item
        const listItem = document.createElement("li")
        // put the character inside of the list item
        listItem.textContent = letters[i];
        // append that list item to the #phrase ul
        phrase.appendChild(listItem);
        
       
         if(letters[i] === " "){
            listItem.className = 'space';
        } else {
            listItem.classList.add("letter");
        }

    }
    console.log(phrase)
};


function checkLetter(guess){
    // get all of the elements with a class of “letter” 
    const li = document.getElementById("phrase").getElementsByTagName("li");
    // console.log(li)
    // variable to store matched letters in
    var matchingLetter = null;
     //loop over the letters in the phrase
    for(var i = 0; i < li.length; i++) {
        console.log(li[i])
         // if the letter has the letter class "letter"
        if(li[i].classList.contains("letter")) {
          
           //check to see if the button they chose is a match
           if(li[i] === guess) {
               // add the show class
                pressedLetter.classList.add("show")
                // add the letter to the matchingLetter variable 
                matchingLetter.push(li[i])

                } else {
                    //If a match wasn’t found, the function should return null.
                    return null 
            }
        }
    }
}


keyboard.addEventListener("click", function(){
    const pressedLetter = event.target;
    // console.log(pressedLetter)

    // if chosent letter doesnt already contain the chosen class
    if (!pressedLetter.classList.contains("chosen")){
        //set chosen button to diabled
        pressedLetter.setAttribute('disabled', '');
        // add the chosen class
        pressedLetter.classList.add("chosen")
        // store the checkletter function in a variable 

    } else {
        // add a point to the missed variable if wrong letter is chosen
        missed++

        // get the scoreboard which containes all the lives
        const scoreboard = document.querySelector('#scoreboard').firstElementChild;
        //remove a try
        const tries = docuemnt.querySelectorAll(".tries");
        scoreboard.removeChild( tries[0] );
        
    }
    checkLetter(pressedLetter)
});


// getRandomPhraseAsArray(phrases);
// getRandomPhraseAsArray(phrases)
// console.log(letter)

startGame(phrases)