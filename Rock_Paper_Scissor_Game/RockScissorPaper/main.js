let userScore = 0;
let compScore = 0;
let gameOver = false;

function playGame(userChoice) {
    if (gameOver) return;

    const choices = ["Rock", "Paper", "Scissor"];
    const compChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === compChoice) {
        result = "It's a Tie!";
    } else if (
        (userChoice === "Rock" && compChoice === "Scissor") ||
        (userChoice === "Paper" && compChoice === "Rock") ||
        (userChoice === "Scissor" && compChoice === "Paper")
    ) {
        result = "You Win!";
        userScore++;
    } else {
        result = "Computer Wins!";
        compScore++;
    }

    document.getElementById("round_result").innerText = 
        `You chose ${userChoice}, Computer chose ${compChoice} — ${result}`;
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("compScore").innerText = compScore;

    checkWinner();
}

function checkWinner() {
    if (userScore === 5 || compScore === 5) {
        gameOver = true;
        const winnerText = userScore === 5 ? "🎉 You Win the Game!" : "💻 Computer Wins the Game!";
        document.getElementById("winnerMessage").innerText = winnerText;
        document.getElementById("winnerModal").classList.remove("hidden");
    }
}

function restartGame() {
    userScore = 0;
    compScore = 0;
    gameOver = false;

    document.getElementById("round_result").innerText = "";
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("compScore").innerText = compScore;
    document.getElementById("winnerModal").classList.add("hidden");
}
