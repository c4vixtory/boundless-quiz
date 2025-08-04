document.addEventListener("DOMContentLoaded", () => {
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
    },
  ];

  let current = 0;
  let score = 0;

  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const nextBtn = document.getElementById("next-btn");
  const resultsEl = document.getElementById("results");

  // 🎨 Progress Bar Setup
  const progressBar = document.createElement("div");
  progressBar.style.height = "8px";
  progressBar.style.width = "100%";
  progressBar.style.background = "#f0eaff";
  progressBar.style.borderRadius = "5px";
  progressBar.style.overflow = "hidden";
  progressBar.style.marginBottom = "15px";

  const progressFill = document.createElement("div");
  progressFill.style.height = "100%";
  progressFill.style.width = "0%";
  progressFill.style.background = "#d5cfff";
  progressFill.style.transition = "width 0.5s ease";
  progressBar.appendChild(progressFill);

  document.querySelector(".quiz-container").insertBefore(progressBar, questionEl);

  function loadQuestion() {
    nextBtn.style.display = "none";
    resultsEl.innerText = "";

    // ✨ Fade-in animation
    questionEl.style.opacity = 0;
    choicesEl.style.opacity = 0;
    setTimeout(() => {
      questionEl.style.opacity = 1;
      choicesEl.style.opacity = 1;
    }, 100);

    questionEl.style.transition = "opacity 0.5s ease";
    choicesEl.style.transition = "opacity 0.5s ease";

    // 🔄 Update progress bar
    const percent = ((current + 1) / questions.length) * 100;
    progressFill.style.width = `${percent}%`;

    let q = questions[current];
    questionEl.innerText = q.text;
    choicesEl.innerHTML = "";

    q.choices.forEach((choice) => {
      let li = document.createElement("li");
      li.innerText = choice;
      li.onclick = () => handleAnswer(choice);
      li.style.cursor = "pointer";
      li.style.padding = "10px";
      li.style.borderRadius = "8px";
      li.style.margin = "5px 0";
      li.style.backgroundColor = "#ffffff";
      li.style.transition = "background-color 0.3s ease";
      choicesEl.appendChild(li);
    });
  }

  function handleAnswer(selected) {
    const q = questions[current];
    const choiceItems = choicesEl.querySelectorAll("li");

    choiceItems.forEach((li) => {
      if (li.innerText === q.answer) {
        li.style.backgroundColor = "#d6ffe4";
      } else if (li.innerText === selected) {
        li.style.backgroundColor = "#ffe4e4";
      }
      li.style.pointerEvents = "none";
    });

    if (selected === q.answer) score++;
    nextBtn.style.display = "block";
  }

  function showResults() {
    questionEl.innerText = "Quiz Complete!";
    choicesEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultsEl.innerText = `Your score: ${score}/${questions.length}`;
    progressFill.style.width = "100%";
  }

  nextBtn.onclick = () => {
    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  };

  loadQuestion();
});
