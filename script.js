const questions = [
{
q: “意味が分からないことをやれと言われた時どうする？”,
a: [
[“とりあえず動く”, “D”],
[“理由を聞く”, “I”],
[“空気を読む”, “A”],
[“安心できるならやる”, “Y”]
]
},
{
q: “考え事をする時どうなる？”,
a: [
[“直感で決める”, “S”],
[“順番に整理する”, “J”],
[“全体を見る”, “K”],
[“深く掘る”, “L”]
]
},
{
q: “覚えやすいのは？”,
a: [
[“法則”, “O”],
[“繰り返し”, “C”],
[“映像”, “G”],
[“感情”, “T”]
]
},
{
q: “人間関係で一番欲しいものは？”,
a: [
[“安心”, “Q”],
[“共感”, “U”],
[“尊敬”, “F”],
[“主導権”, “N”]
]
}
];

const typeNames = {
DS: “突破者”,
DJ: “戦術家”,
DK: “統率者”,
DL: “執念者”,

YS: “守護者”,
YJ: “支援者”,
YK: “調律者”,
YL: “分析者”,

AS: “表現者”,
AJ: “語り手”,
AK: “共鳴者”,
AL: “感情探究者”,

IS: “解析者”,
IJ: “理論家”,
IK: “策略家”,
IL: “深層探究者”
};

const typeText = {
DS: “欲しいものへ一直線。”,
DJ: “勝つ流れを作る。”,
DK: “全体を動かす。”,
DL: “極限まで掘り続ける。”,

YS: “安心できる日常を守る。”,
YJ: “人を支え流れを整える。”,
YK: “全体のバランスを整える。”,
YL: “壊れない道を探す。”,

AS: “感情をそのまま表現する。”,
AJ: “感情と物語を紡ぐ。”,
AK: “周囲と感情を響かせる。”,
AL: “感情の深層へ潜る。”,

IS: “瞬時に答えを見つける。”,
IJ: “理論で世界を整理する。”,
IK: “盤面を読み勝ち筋を作る。”,
IL: “根本を理解するまで止まらない。”
};

const typeImages = {
DS: “images/ds.png”,
DJ: “images/dj.png”,
DK: “images/dk.png”,
DL: “images/dl.png”
};

let current = 0;

let scores = {
D: 0, Y: 0, A: 0, I: 0,
S: 0, J: 0, K: 0, L: 0,
O: 0, C: 0, G: 0, T: 0,
Q: 0, U: 0, F: 0, N: 0
};

const questionEl = document.getElementById(“question”);
const answersEl = document.getElementById(“answers”);
const countEl = document.getElementById(“count”);
const bar = document.getElementById(“bar”);
const resultEl = document.getElementById(“result”);
const resultCode = document.getElementById(“resultCode”);
const resultName = document.getElementById(“resultName”);
const resultText = document.getElementById(“resultText”);
const resultImage = document.getElementById(“resultImage”);

function showQuestion() {
const q = questions[current];

questionEl.innerText = q.q;
answersEl.innerHTML = “”;
countEl.innerText = ${current + 1} / ${questions.length};
bar.style.width = ${((current + 1) / questions.length) * 100}%;

q.a.forEach(answer => {
const btn = document.createElement(“button”);
btn.innerText = answer[0];

btn.onclick = function () {
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

function top(codes) {
return codes.sort((a, b) => scores[b] - scores[a])[0];
}

function showResult() {
document.querySelector(”.card”).style.display = “none”;
resultEl.classList.remove(“hidden”);

const energy = top([“D”, “Y”, “A”, “I”]);
const thinking = top([“S”, “J”, “K”, “L”]);
const memory = top([“O”, “C”, “G”, “T”]);
const social = top([“Q”, “U”, “F”, “N”]);

const mainCode = energy + thinking;
const fullCode = ${mainCode}/${memory}${social};

resultCode.innerText = fullCode;
resultName.innerText = typeNames[mainCode] || “未分類”;
resultText.innerText = typeText[mainCode] || “あなたの思考構造が解析されました。”;

if (typeImages[mainCode]) {
resultImage.src = typeImages[mainCode];
resultImage.style.display = “block”;
} else {
resultImage.style.display = “none”;
}
}

showQuestion();