const textarea = document.querySelector('textarea');
const counter = document.querySelector('.counter');

function countingCharacters() {

    const textLenght = textarea.value.length
    console.log(textLenght);

    counter.innerText = `${textLenght}`;
}