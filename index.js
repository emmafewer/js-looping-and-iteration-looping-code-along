// Code your solutions in this file
function writeCards(names){
    let array = []
    for (let i = 0; i < names.length; i++) {
        array[i] = (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return array;
}

function countDown(number){
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}