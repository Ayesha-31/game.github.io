let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let targetNum = [Math.floor(Math.random() * 10)];
let attempts = 1;


btn.addEventListener('click', function () {
    let input = document.getElementById('userinput').value;
    if (input == targetNum) {
        output.innerHTML = `CONGRATS! You Win :) The number is ${targetNum} and it took you ${attempts} guesses..`
        attempts++;
    } else if (input < targetNum) {
        output.innerHTML = "You guessed too low! Try again :("
        attempts++;
    };
    if (input > targetNum) {
        output.innerHTML = " You guessed too high! Try again :("
        attempts++;

    }
});




