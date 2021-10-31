var keyboard = document.getElementById("qwerty");
var phrase = document.getElementById("phrase").getElementsByTagName("UL")[0];
var startButton = document.getElementsByClassName("btn__reset")[0];
var letters = [];
var gameContainer = document.getElementById("overlay");
var listItem = document.createElement("li")
let missed = 0;

const phrases = [
    "everything you can imagine is real",
    "every moment is a fresh beginning",
    "die with memories not dreams",
    "it hurt because it mattered",
    "turn your wounds into wisdom"

]

// const phraseArray = getRandomPhraseAsArray(phrases);

startButton.addEventListener("click", startGame);

//function to start game and get rid of title screen
function startGame(){
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
};


function checkLetter(guess){
    // get all of the elements with a class of “letter” 
    const li = document.getElementById("phrase").getElementsByTagName("li");

    // variable to store matched letters in
    var matchingLetter = null;
    //loop over the letters in the phrase
    for(var i = 0; i < li.length; i++) {
           //check to see if the button they chose is a match
           if(li[i].innerText === guess) {
               // add the show class
               li[i].classList.add('show');
                // add the letter to the matchingLetter variable 
                matchingLetter += guess.textContent
            }
    }
    return matchingLetter
};


keyboard.addEventListener("click", function(){
    const pressedLetter = event.target;
    const pressedLetterValue = pressedLetter.innerText

    // if chosent letter doesnt already contain the chosen class
    if (!pressedLetter.classList.contains("chosen")){
        //set chosen button to diabled
        pressedLetter.setAttribute('disabled', '');
        // add the chosen class
        pressedLetter.classList.add("chosen")
        // store the checkletter function in a variable 

        const checked = checkLetter(pressedLetterValue)
        if(checked === null) {
            // get the image tags that have the hearts image in them
            const tries = document.querySelectorAll('.tries img');
            //swaps heart image for lost heart immage
            tries[missed].src = 'images/lostHeart.png';
            //adds point to missed variable
            missed++
        }
    }
    checkWin()

});

function checkWin () {
    const showClass = document.getElementsByClassName("show")
    const letterClass = document.getElementsByClassName("letters")
    const title = document.getElementsByClassName('title')[0]
    
    // console.log(showClass);
    // console.log(letterClass)

    if(showClass.length === letterClass.length){
        gameContainer.className = 'win';
    }
    else if (missed >= 5){
        gameContainer.className = 'lose';
        gameContainer.style.display = 'flex';
        title.innerHTML = "Sorry you lost!";
    }

}
