const questions = [
  {
    question:"意味が分からないことをやれと言われた時どうする？",
    answers:[
      {text:"とりあえず動く",type:"D"},
      {text:"理由を聞く",type:"I"},
      {text:"空気を読む",type:"A"},
      {text:"安心できるならやる",type:"Y"}
    ]
  },
  {
    question:"考え事をする時どうなる？",
    answers:[
      {text:"直感で決める",type:"S"},
      {text:"順番に整理する",type:"J"},
      {text:"全体を見る",type:"K"},
      {text:"深く掘る",type:"L"}
    ]
  }
];

const results = {
  D:"突破者",
  I:"深層探究者",
  A:"語り手",
  Y:"守護者",
  S:"表現者",
  J:"理論家",
  K:"策略家",
  L:"深層探究者"
};

let currentQuestion = 0;

const scores = {};

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const resultCode = document.getElementById("resultCode");
const resultName = document.getElementById("resultName");
const resultText = document.getElementById("resultText");
const countEl = document.getElementById("count");
const bar = document.getElementById("bar");

function showQuestion(){

  const q = questions[currentQuestion];

  questionEl.innerText = q.question;

  answersEl.innerHTML = "";

  countEl.innerText =
  `${currentQuestion + 1} / ${questions.length}`;

  bar.style.width =
  `${(currentQuestion / questions.length) * 100}%`;

  q.answers.forEach(answer => {

    const button = document.createElement("button");

    button.innerText = answer.text;

    button.onclick = () => selectAnswer(answer.type);

    answersEl.appendChild(button);

  });

}

function selectAnswer(type){

  scores[type] = (scores[type] || 0) + 1;

  currentQuestion++;

  if(currentQuestion < questions.length){

    showQuestion();

  }else{

    showResult();

  }

}

function showResult(){

  document.querySelector(".card").style.display = "none";

  resultEl.classList.remove("hidden");

  const topType =
  Object.keys(scores).reduce((a,b)=>
  scores[a] > scores[b] ? a : b
  );

  resultCode.innerText = topType;

  resultName.innerText = results[topType];

  resultText.innerText =
  "あなたの思考構造が解析されました。";

}

showQuestion();