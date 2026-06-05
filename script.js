alert("JS起動");
const questions = [
  {
    q: "初めての場所でどう動く？",
    a: [
      ["直感で動く", "D"],
      ["周囲を見る", "Y"]
    ]
  },
  {
    q: "考える時どうなる？",
    a: [
      ["勢い", "S"],
      ["分析", "J"]
    ]
  }
];

const typeNames = {
  DS: "突破者",
  DJ: "戦術家",
  YS: "守護者",
  YJ: "分析者"
};

const typeText = {
  DS: "考える前に動く。",
  DJ: "勝つ方法を考える。",
  YS: "安全を大事にする。",
  YJ: "慎重に全体を見る。"
};

let current = 0;

let scores = {
  D: 0,
  Y: 0,
  S: 0,
  J: 0
};

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const countEl = document.getElementById("count");
const bar = document.getElementById("bar");
const resultEl = document.getElementById("result");
const resultCode = document.getElementById("resultCode");
const resultName = document.getElementById("resultName");
const resultText = document.getElementById("resultText");

function showQuestion() {
  const q = questions[current];

  questionEl.innerText = q.q;
  answersEl.innerHTML = "";
  countEl.innerText = (current + 1) + " / " + questions.length;
  bar.style.width = ((current + 1) / questions.length * 100) + "%";

  q.a.forEach(function(answer) {
    const btn = document.createElement("button");
    btn.innerText = answer[0];

    btn.onclick = function() {
      scores[answer[1]]++;
      current++;

      if (current < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };

    answersEl.appendChild(btn);
  });
}

function showResult() {
  document.querySelector(".card").style.display = "none";
  resultEl.classList.remove("hidden");

  const energy = scores.D >= scores.Y ? "D" : "Y";
  const thinking = scores.S >= scores.J ? "S" : "J";
  const code = energy + thinking;

  resultCode.innerText = code;
  resultName.innerText = typeNames[code];
  resultText.innerText = typeText[code];
}

showQuestion();