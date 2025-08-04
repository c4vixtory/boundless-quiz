const questions = [
  {
    question: "What is Boundless?",
    choices: [
      "A blockchain explorer",
      "The universal ZK protocol",
      "A token faucet",
      "A staking dashboard"
    ],
    answer: "The universal ZK protocol"
  },
  {
    question: "What is the full meaning of ZK?",
    choices: ["Zero-knowledge", "Zone kernel", "Zeta-key", "Zen keeper"],
    answer: "Zero-knowledge"
  },
  {
    question: "What does The Signal do?",
    choices: [
      "Measures gas fees",
      "Compresses Ethereum’s finality into a single proof",
      "Generates validator keys",
      "Schedules block timestamps"
    ],
    answer: "Compresses Ethereum’s finality into a single proof"
  },
  {
    question: "What is the token bonus for Gold tier community members?",
    choices: ["10%", "20%", "30%", "40%"],
    answer: "30%"
  },
  {
    question: "How long will the Boundless ZK mining go on for?",
    choices: ["3 weeks", "4 weeks", "5 weeks", "6 weeks"],
    answer: "5 weeks"
  },
  {
    question: "What happens to provers who fail to perform a task after locking?",
    choices: [
      "They earn fewer tokens",
      "They get their staked tokens slashed",
      "Their account is frozen",
      "They are removed from the leaderboard"
    ],
    answer: "They get their staked tokens slashed"
  },
  {
    question: "What does VSA stand for?",
    choices: [
      "Verified Stake Allocation",
      "Virtual Signing Authority",
      "Verifiable Service Agreement",
      "Validator Signal Algorithm"
    ],
    answer: "Verifiable Service Agreement"
  },
  {
    question: "What two metrics does Boundless use to reward provers?",
    choices: [
      "Speed and accuracy",
      "Effort and uptime",
      "Value delivered and Work performed",
      "Volume and frequency"
    ],
    answer: "Value delivered and Work performed"
  },
  {
    question: "What is the goal of a reverse Dutch auction?",
    choices: [
      "To reward top voters",
      "To find the lowest acceptable price for a proof",
      "To set gas limits",
      "To rebalance protocol emissions"
    ],
    answer: "To find the lowest acceptable price for a proof"
  },
  {
    question: "What is the last remaining challenge for ZK adoption that Boundless aims to solve?",
    choices: [
      "Decentralized staking",
      "Consensus layer rewrites",
      "End-to-end integration",
      "Real-time price feeds"
    ],
    answer: "End-to-end integration"
  }
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");

function loadQuiz() {
  questions.forEach((q, index) => {
    const questionElem = document.createElement("div");
    questionElem.classList.add("question");
    questionElem.innerHTML = `${index + 1}. ${q.question}`;

    const choicesList = document.createElement("ul");
    choicesList.classList.add("choices");

    q.choices.forEach(choice => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => {
        Array.from(choicesList.children).forEach(c => c.classList.remove("selected"));
        li.classList.add("selected");
      });
      choicesList.appendChild(li);
    });

    quizContainer.appendChild(questionElem);
    quizContainer.appendChild(choicesList);
  });
}

function calculateScore() {
  let score = 0;
  const selectedChoices = document.querySelectorAll(".selected");
  selectedChoices.forEach((choiceElem, index) => {
    if (choiceElem.textContent === questions[index].answer) {
      score++;
    }
  });

  resultContainer.textContent = `🎉 You scored ${score} out of ${questions.length}`;
}

submitButton.addEventListener("click", calculateScore);
loadQuiz();
