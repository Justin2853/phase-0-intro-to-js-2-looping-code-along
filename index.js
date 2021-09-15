const cards = ["Ada", "Brendan", "Ali"];

function writeCards(names, surprise) {
    let writtenLetters = [];
    for(let i = 0; i < names.length; i++){
    writtenLetters.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
    }
    return writtenLetters;
}
function countDown(startingNumber){
    let userNumber = startingNumber;
    while (0 <= startingNumber){
    console.log(startingNumber --);
    }
}
countDown(10);