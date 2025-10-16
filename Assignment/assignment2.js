let remainingGuess = 5;
let randomNumber = Math.floor(Math.random() * 10) + 1;
let gameOver = false;

function submitGuess() {
    if (gameOver) return;

    let inputElement = document.getElementById("userinput");
    let submitButton = document.getElementById("submitbtn");
    let userInput = inputElement.value.trim();
    console.log(userInput);

    if (userInput === ' '){
        alert('Please enter a number before submitting.')
        return;
    }

    let userNumber = Number(userInput);
     if (isNaN(userNumber)) {
        alert("Invalid input! Please enter a valid number.");
     }
    
     console.log(randomNumber);

     if(remainingGuess > 0){
        remainingGuess--;
        if (userNumber === randomNumber) { //nested if
            alert('congratulations! You guessed the  number correctly.');
            gameOver = true;
            inputElement.disabled = true;
            submitButton.disabled = true;
            return;
        } else if (userNumber < randomNumber){
            alert(`Oops! Try a greater number. You have ${remainingGuess} guesses left!`);
        } else {
            alert(
                `Oops! Try a lesser number. You have ${remainingGuess} guesses left`
            );
        }
    
     }

     if (remainingGuess === 0) {
        alert('you have used all your guesses. Game over!');
        gameOver = true;
        inputElement.disabled = true;
        submitButton.disabled = true;
     }
     
}