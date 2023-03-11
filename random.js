
let note = document.querySelector('#note');
let stringNumber = document.querySelector('#stringNumber');
let notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function randomBtnOnClick() {

    note.innerText = notes[random(0, 6)];
    stringNumber.innerText = random(1, 6);

}

function random(min, max) {
    let output = Math.floor(Math.random() * (max-min+1))+min;
    return output;
}

