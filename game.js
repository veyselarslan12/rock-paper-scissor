// variables

// humanScore
// computerScore

// array of r, p, s

// while playing the game
    // humanChoice: human chooses r, p, or s

    // get random index
    // computerChoice: use random index to determine computer choice

    // winning conditions for human?

    // if hC === 'r' && cC === 's' || hC === 'p' && cC === 'r' || hC === 's' && cC === 'p'
        // increase humanScore
        // log "you won!"
    // if computer won
        // increase computerScore
        // log "you lost!"
    // if tie 
        // log "it's a tie"
    // do you want to play again?
        // if yes
            // repeat the game
        // if no
            // stop

let humanScore  = 0;
let computerScore = 0;

let isRunning = true

const choices = ["R", "P", "S"];

while (isRunning) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const humanChoice =  prompt("Choose rock (R), paper (P), or scissor (S)").toUpperCase();

// check for invalid input
    if (!choices.includes(humanChoice) ) {
    alert("Invalid choice");
    }

    if( (humanChoice === 'R' && computerChoice === 'P') || 
    (humanChoice === 'P' && computerChoice === 'S') || 
    (humanChoice === 'S' && computerChoice === 'R')) 
    {
     alert (`Your choice: ${humanChoice}, Computer's choice: ${computerChoice}, You win!`) 
     humanScore = humanScore + 1    // humanScore += 1  or humanScore++

    } else if ( humanChoice === computerChoice) {
    alert(`Your choice: ${humanChoice}, Computer'S choice: ${computerChoice}, It's a tie!`);

    } else {
    alert(`Your choice: ${humanChoice}, Computer's choice: ${computerChoice}, You lose!`);
    computerScore = computerScore + 1   // computerScore += 1 or computerScore++
    }

    alert(`Human: ${humanScore} | Computer: ${computerScore}`)  

    isRunning = confirm('do you want to play again?');

}

alert('Goodbye')