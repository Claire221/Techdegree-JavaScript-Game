const keyboard = document.getElementById("qwerty");
const phrase = document.getElementById("phrase").getElementsByTagName('ul')[0];
const startButton = document.getElementsByClassName("btn__reset")[0];
var letters = [];

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
    "shadow is a god",
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
};


// function to randomly choose a quote from array 
function getRandomPhraseAsArray(arr){
    const selectQuote = Math.floor(Math.random() * arr.length);
    
    let chosenQuote = arr[selectQuote];

    for(var i = 0; i < chosenQuote.length; i++){
        letters.push(chosenQuote[i])
    };

    // console.log(chosenQuote)
    // console.log(letters)

    addPhraseToDisplay(selectQuote)
};



// function to create li from each letter and append it to the ul
function addPhraseToDisplay(){
        // loops through an array of characters
        for(var i = 0; i < letters.length; i++) {
            // create a list item
            const listItem = document.createElement("li");
            // add character inside of the list item
            listItem.innerText = letters[i];
            // append that list item to the #phrase ul
            phrase.appendChild(listItem);
        
            if(letters[i] === " "){
                letters[i].trim();
            } else {
                listItem.classList.add("letter");
            }
        // console.log(phrase)
    };
};


document.addEventListener('keypress', function(){
    const key = event.key 

    function checkLetter(key){
        // get all of the elements with a class of “letter” 
        var letterClass = document.getElementsByClassName("letter");
        var matchingLetter = "";

        // loop over the letters and check if they match the letter in the button the player has chosen
        for(var i = 0; i <letterClass.length; i++){
            // if there’s a match, the function should add the “show” class
            if(letterClass === key) {
                key.classList.add("show")
                matchingLetter.push(letterClass[i])
                return letterClass[i]
            //If a match wasn’t found, the function should return null.
            } else {
                return null 
            }
        };
        console.log(letterClass.innerText)
    };
    console.log(key)

    // key.classList.add("chosen")
});

getRandomPhraseAsArray(phrases);
