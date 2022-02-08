
let number1 = prompt("give me a number between 1 to 10");
let number2 = prompt("give me a number between 1 to 10")
console.log(typeof number1, typeof number2);
let number1Parse = parseInt(number1);
let number2Parse = parseInt(number2);
console.log(typeof number1Parse, typeof number2Parse)
//alert(number1Parse + number2Parse);
if (number1Parse  >= number2Parse) {
     alert("The larger number is" + number1Parse);

    } else if (number2Parse >= number1Parse){
alert("False" )

}  


 
/*function guessingGame() {
    const numToGuess = Math.floor(Math.random() * 100) % 10 + 1;
    let guess = prompt("Guess a number between 1 and 10");
    let parsedGuess = parseInt(guess);
    let clue = '';
    if (typeof parsedGuess === "number" &&
        !isNaN(parsedGuess))
    {
        if (parsedGuess === numToGuess)
        {
            alert("You Win!")
        } 
        else 
        {   
            if (parsedGuess > numToGuess) {
                clue = "Too high"
            } else {
                clue = "Too Low"
            }
            guess = prompt(`${clue} Guess a number between 1 and 10`);
            parsedGuess = parseInt(guess);
            if (parsedGuess === numToGuess)
            {
                alert("You Win!")
            }
            else
            {
                if (parsedGuess > numToGuess) {
                    clue = "Too high"
                } else {
                    clue = "Too Low"
                }
               guess = prompt(`${clue}! Guess a number between 1 and 10"`);
                parsedGuess = parseInt(guess);
                if (parsedGuess === numToGuess) {
                    alert("You Win!")
                }
                else {
                    if (parsedGuess > numToGuess) {
                        clue = "Too high"
                    } else {
                        clue = "Too Low"
                    }
                    guess = prompt(`${clue}! Guess a number between 1 and 10"`);
                    parsedGuess = parseInt(guess);
                    if (parsedGuess === numToGuess) {
                        alert("You Win!")
                    }
                    else {
                        alert("You loose!")
                    }
                }
            }
        }
        
    }
}
guessingGame()*/
