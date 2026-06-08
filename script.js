const questions = [
  {
    q: "初対面でどう動く？",
    a: [
      ["とりあえず話す", "D"],
      ["相手を見る", "Y"],
      ["空気を和ませる", "A"],
      ["静かに観察", "I"]
    ]
  },
  {
    q: "考える時に近いのは？",
    a: [
      ["直感", "S"],
      ["整理", "J"],
      ["全体", "K"],
      ["深掘り", "L"]
    ]
  },
  {
    q: "人間関係で欲しいものは？",
    a: [
      ["刺激", "D"],
      ["安心", "Y"],
      ["共感", "A"],
      ["理解", "I"]
    ]
  }
];

let current = 0;

let scores = {
  D: 0, Y: 0, A: 0, I: 0,
  S: 0, J: 0, K: 0, L: 0
};

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const countEl = document.getElementById("count");
const resultEl = document.getElementById("result");
const resultCode = document.getElementById("resultCode");
const resultName = document.getElementById("resultName");
const resultText = document.getElementById("resultText");

function showQuestion() {
  const q = questions[current];

  questionEl.innerText = q.q;
  answersEl.innerHTML = "";
  countEl.innerText = (current + 1) + " / " + questions.length;

  q.a.forEach(function(answer) {
    const button = document.createElement("button");
    button.innerText = answer[0];

    button.onclick = function() {
      scores[answer[1]] = scores[answer[1]] + 1;
      current = current + 1;

      if (current < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };

    answersEl.appendChild(button);
  });
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultEl.classList.remove("hidden");

  const energy = getTop(["D", "Y", "A", "I"]);
  const thinking = getTop(["S", "J", "K", "L"]);
  const code = energy + thinking;

  resultCode.innerText = code;
  resultName.innerText = "CORE CODE";
  resultText.innerText = "あなたのタイプは " + code + " です。";
}

function getTop(list) {
  let best = list[0];

  for (let i = 1; i < list.length; i++) {
    if (scores[list[i]] > scores[best]) {
      best = list[i];
    }
  }

  return best;
}

showQuestion();
