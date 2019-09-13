const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const buttonStart = document.querySelector('.btn__reset');
const mainContainer = document.querySelector('.main-container');
const overlay = document.getElementById('overlay');


var missed = 0;

var phrases = [
    'GAME OF THRONES',
    'ORANGE IS THE NEW BLACK',
    'SIX FEET UNDER',
    'THE OFFICE',
    'SMALLVILLE']

buttonStart.addEventListener('click', () => {
    mainContainer.removeChild(overlay);
});

function getRandomPhraseAsArray(arr){
    //randomly choose a phrase from the array
    var randomNumber = Math.floor(Math.random() * 5);

    //split phrase into a new array of characters
    var splitPhrase = phrases[randomNumber].split('');

    //return the new array
    return splitPhrase;
}

function addPhraseToDisplay(arr){
    
    // loop through splitPhrase array
    for (i = 0; i <arr.length; i++){
    // for each character in the array create an li
    // append li to `#phrase ul`
    const phraseDiv = document.querySelector('#phrase');
    const ul = phraseDiv.querySelector('ul');
    const li = document.createElement('li')

    ul.appendChild(li);
    li.textContent = arr[i];

    // // if character is a letter, should add the class "letter to the li"
        if (arr[i] !==' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

function checkLetter(letterguess) {
//get elements with the class of letter
const letters = document.getElementsByClassName('letter');
let letterFound = null;
    for (i = 0; i < letters.length; i++) {
        if (letterguess === letters[i].textContent) {
            letters[i].classList.add('show');
            letterFound = letterguess;
        } 
    }
    if (letterFound === null){
        missed +=1;
    }
    return letterFound; //might not need
}

qwerty.addEventListener('click', (event) => {
  const buttonValue = event.target.textContent;
  if(event.target.tagName === 'BUTTON'){
    checkLetter(buttonValue.toUpperCase());
    event.target.classList.add('chosen');
    event.target.setAttribute('disabled', '');
  }
  checkWin();
});

function checkWin() {
    const allLetters = document.querySelectorAll('.letter');
    const shownLetters = document.querySelectorAll('.show');
    if(allLetters.length === shownLetters.length){
        overlay.className = 'win';
        mainContainer.appendChild(overlay);
    }
    if(missed === 5){
        overlay.className = 'lose';
        mainContainer.appendChild(overlay);
    }
    buttonStart.addEventListener('click', () => {
        location.reload();
    });
    
};



