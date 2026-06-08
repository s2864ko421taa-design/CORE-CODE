const questions = [
  {
    q:"初めての場所でどう動く？",
    a:[
      ["直感で動く","D"],
      ["周囲を見る","Y"]
    ]
  },
  {
    q:"考える時どうなる？",
    a:[
      ["勢い","S"],
      ["分析","J"]
    ]
  }
];

const typeNames = {
  DS:"突破者",
  DJ:"戦術家",
  YS:"守護者",
  YJ:"分析者"
};

const typeText = {
  DS:"考える前に動くタイプ。",
  DJ:"勝つ方法を考えるタイプ。",
  YS:"安全を大事にするタイプ。",
  YJ:"慎重に分析するタイプ。"
};

let current = 0;

let scores = {
  D:0,
  Y:0,
  S:0,
  J:0
};

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const countEl = document.getElementById("count");

function showQuestion(){
  const q = questions[current];

  questionEl.innerText = q.q;
  answersEl.innerHTML = "";
  countEl.innerText = (current + 1) + " / " + questions.length;

  q.a.forEach(function(answer){
    const button = document.createElement("button");
    button.innerText = answer[0];

    button.onclick = function(){
      scores[answer[1]]++;
      current++;

      if(current < questions.length){
        showQuestion();
      }else{
        showResult();
      }
    };

    answersEl.appendChild(button);
  });
}

function showResult(){
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  const energy = scores.D >= scores.Y ? "D" : "Y";
  const thinking = scores.S >= scores.J ? "S" : "J";
  const code = energy + thinking;

  document.getElementById("resultCode").innerText = code;
  document.getElementById("resultName").innerText = typeNames[code];
  document.getElementById("resultText").innerText = typeText[code];
}

showQuestion();