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

const choices = ["R", "P", "S"];

const computerChoices = choices[Math.floor(Math.random() * choices.length)];

const humanChoices =  prompt("Choose rock (R), paper (P), or scissor (S)").toUpperCase();

if (!choices.includes(humanChoices) ) {
    alert("Invalid choice");
}

if( (humanChoices === 'R' && computerChoices === 'P') || 
    (humanChoices === 'P' && computerChoices === 'S') || 
    (humanChoices === 'S' && computerChoices === 'R')) 
    {
        alert (`Your choice: ${humanChoices}, Computer's choice: ${computerChoices}, You win!`)

} else if ( humanChoices === computerChoices) {
    alert(`Your choice: ${humanChoices}, Computer'S choice: ${computerChoices}, It's a tie!`);

} else {
    alert(`Your choice: ${humanChoices}, Computer's choice: ${computerChoices}, You lose!`);
}

    