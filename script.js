const questions = [
  {
    text: "What is Boundless?",
    choices: [
      "A blockchain explorer",
      "The universal ZK protocol",
      "A token faucet",
      "A staking dashboard",
    ],
    answer: "The universal ZK protocol",
  },
  {
    text: "What is the full meaning of ZK?",
    choices: ["Zero-knowledge", "Zone kernel", "Zeta-key", "Zen keeper"],
    answer: "Zero-knowledge",
  },
  {
    text: "What does The Signal do?",
    choices: [
      "Measures gas fees",
      "Compresses Ethereum’s finality into a single proof",
      "Generates validator keys",
      "Schedules block timestamps",
    ],
    answer: "Compresses Ethereum’s finality into a single proof",
  },
  {
    text: "What is the token bonus for Gold tier community members?",
    choices: ["10%", "20%", "30%", "40%"],
    answer: "30%",
  },
  {
    text: "How long will the Boundless ZK mining go on for?",
    choices: ["3 weeks", "4 weeks", "5 weeks", "6 weeks"],
    answer: "5 weeks",
  },
  {
    text: "What happens to provers who fail to perform a task after locking?",
    choices: [
      "They earn fewer tokens",
      "They get their staked tokens slashed",
      "Their account is frozen",
      "They are removed from the leaderboard",
    ],
    answer: "They get their staked tokens slashed",
  },
  {
    text: "What does VSA stand for?",
    choices: [
      "Verified Stake Allocation",
      "Virtual Signing Authority",
      "Verifiable Service Agreement",
      "Validator Signal Algorithm",
    ],
    answer: "Verifiable Service Agreement",
  },
  {
    text: "What two metrics does Boundless use to reward provers?",
    choices: [
      "Speed and accuracy",
      "Effort and uptime",
      "Value delivered and Work performed",
      "Volume and frequency",
    ],
    answer: "Value delivered and Work performed",
  },
  {
    text: "What is the goal of a reverse Dutch auction?",
    choices: [
      "To reward top voters",
      "To find the lowest acceptable price for a proof",
      "To set gas limits",
      "To rebalance protocol emissions",
    ],
    answer: "To find the lowest acceptable price for a proof",
  },
  {
    text: "What is the last remaining challenge for ZK adoption that Boundless aims to solve?",
    choices: [
      "Decentralized staking",
      "Consensus layer rewrites",
      "End-to-end integration",
      "Real-time price feeds",
    ],
    answer: "End-to-end integration",
  }
];

let currentQuestion = 0;
let score = 0;
let username = "";

document.getElementById("start-btn").addEventListener("click", () => {
  username = document.getElementById("username").value.trim();
  if (username !== "") {
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
  }
});

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.text;
  document.getElementById("options").innerHTML = "";
  q.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.classList.add("option");
    button.addEventListener("click", () => checkAnswer(choice));
    document.getElementById("options").appendChild(button);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) score++;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score").textContent = `${username}, you scored ${score}/${questions.length}`;

  const leaderboardEntry = document.createElement("li");
  leaderboardEntry.textContent = `${username} — ${score}/${questions.length}`;
  document.getElementById("leaderboard-list").appendChild(leaderboardEntry);
}

document.getElementById("restart-btn").addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  username = "";
  document.getElementById("username").value = "";
  document.getElementById("result").style.display = "none";
  document.getElementById("intro").style.display = "block";
});
