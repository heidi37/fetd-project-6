const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const buttonStart = document.querySelector('.btn__reset');
const mainContainer = document.querySelector('.main-container');
const overlay = document.getElementById('overlay');

console.log(mainContainer);

buttonStart.addEventListener('click', () => {
    mainContainer.removeChild(overlay);
});

