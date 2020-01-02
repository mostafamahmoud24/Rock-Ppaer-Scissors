let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > P");
const paper_div = document.getElementById("paper");
const rock_div = document.getElementById("rock");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function win(user) {
  userScore++;
  userScore_span.innerHTML = userScore;
  switch (user) {
    case "paper":
      result_div.innerHTML = "Paper covers rock. You win!";
      break;
    case "rock":
      result_div.innerHTML = "Rock crusher scissors. You win!";
      break;
    case "scissors":
      result_div.innerHTML = "Scissors cut paper. You win!";
      break;
  }
  document.getElementById(user).classList.add("green-glow");
  setTimeout(
    () => document.getElementById(user).classList.remove("green-glow"),
    300
  );
}

function lose(user, computer) {
  compScore++;
  compScore_span.innerHTML = compScore;
  switch (computer) {
    case "paper":
      result_div.innerHTML = "Paper covers rock. You lose!";
      break;
    case "rock":
      result_div.innerHTML = "Rock crusher scissors. You lose!";
      break;
    case "scissors":
      result_div.innerHTML = "Scissors cut paper. You lose!";
      break;
  }
  document.getElementById(user).classList.add("red-glow");
  setTimeout(
    () => document.getElementById(user).classList.remove("red-glow"),
    300
  );
}

function draw(user) {
  result_div.innerHTML = "It's a tie!";
  document.getElementById(user).classList.add("yellow-glow");
  setTimeout(
    () => document.getElementById(user).classList.remove("yellow-glow"),
    300
  );
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      win(userChoice);
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("rock"));

  paper_div.addEventListener("click", () => game("paper"));

  scissors_div.addEventListener("click", () => game("scissors"));
}
main();
