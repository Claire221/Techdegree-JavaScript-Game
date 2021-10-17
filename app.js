const keyboard = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startButton = document.getElementsByClassName("btn__reset")[0];
let letters = [];

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

const phraseArray = getRandomPhraseAsArray(phrases);


startButton.addEventListener("click", startGame);

//function to start game and get rid of title screen
function startGame(){
    const gameContainer = document.getElementById("overlay");
    gameContainer.style.display = "none";
};


// function to randomly choose a quote from array 
function getRandomPhraseAsArray(arr){
    const selectQuote = Math.floor(Math.random()* arr.length);
    let chosenQuote = arr[selectQuote];

    for(var i = 0; i < chosenQuote.length; i++){
        letters.push(chosenQuote[i])
    };
};

// function to create li from each letter and append it to the ul
function addPhraseToDisplay(arr){
    for(var i = 0; i < letters.length; i++){
        var li = document.createElement("li")
        var text = document.createTextNode(letters[i]);
        li.appendChild(text);
        phrase.appendChild(li)
        
        if(letters[i] === " "){
            console.log("space")
        } else {
            li.classList.add("letter");
        }
    }
};




document.addEventListener('keypress', function(){
    const key = event.key 

    function checkLetter(key){
        var letterClass = document.getElementsByClassName("letter");
        var matchingLetter = "";
    
        for(var i = 0; i <letterClass.length; i++){
            if(letterClass === key) {
                key.classList.add("show")
                matchingLetter.push(letterClass[i])
                return letterClass[i]
            } else {
                return null 
            }
        };
        console.log(key)
        console.log(key)
    };
    

    key.classList.add("chosen")
});

getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phrases)