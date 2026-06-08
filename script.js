const questions = [

{
q:"初対面でどう動く？",
a:[
["とりあえず話す","D"],
["相手を見る","Y"],
["空気を和ませる","A"],
["静かに観察","I"]
]
},

{
q:"考える時に近いのは？",
a:[
["直感","S"],
["整理","J"],
["全体","K"],
["深掘り","L"]
]
},

{
q:"人間関係で欲しいものは？",
a:[
["刺激","D"],
["安心","Y"],
["共感","A"],
["理解","I"]
]
},

{
q:"揉め事が起きたら？",
a:[
["突破する","S"],
["説明する","J"],
["全体を見る","K"],
["原因を見る","L"]
]
},

{
q:"好きな環境は？",
a:[
["変化が多い","D"],
["落ち着く","Y"],
["楽しい","A"],
["自由","I"]
]
}

];

const typeNames = {

DS:"突破者",
DJ:"戦術家",
DK:"統率者",
DL:"執念者",

YS:"守護者",
YJ:"支援者",
YK:"調律者",
YL:"分析者",

AS:"表現者",
AJ:"語り手",
AK:"共鳴者",
AL:"感情探究者",

IS:"解答者",
IJ:"理論家",
IK:"戦略家",
IL:"深層探究者"

};

const typeText = {

DS:"勢いと突破力で進むタイプ。",
DJ:"頭を使い勝ち筋を作るタイプ。",
DK:"全体を動かすリーダー型。",
DL:"限界まで突き詰めるタイプ。",

YS:"安心感を作る守護型。",
YJ:"人を支える調整型。",
YK:"全体バランスを見るタイプ。",
YL:"静かに分析するタイプ。",

AS:"感情を表現するタイプ。",
AJ:"言葉で人を惹きつけるタイプ。",
AK:"共感力が高いタイプ。",
AL:"感情を深く理解するタイプ。",

IS:"瞬時に答えを出すタイプ。",
IJ:"論理で整理するタイプ。",
IK:"盤面を読む戦略型。",
IL:"本質を掘り続けるタイプ。"

};

let current = 0;

let scores = {
D:0,
Y:0,
A:0,
I:0,

S:0,
J:0,
K:0,
L:0
};

const questionEl =
document.getElementById("question");

const answersEl =
document.getElementById("answers");

const countEl =
document.getElementById("count");

const bar =
document.getElementById("bar");

const resultEl =
document.getElementById("result");

const resultCode =
document.getElementById("resultCode");

const resultName =
document.getElementById("resultName");

const resultText =
document.getElementById("resultText");

function showQuestion(){

const q = questions[current];

questionEl.innerText = q.q;

answersEl.innerHTML = "";

countEl.innerText =
(current + 1) + " / " + questions.length;

bar.style.width =
((current + 1) / questions.length * 100) + "%";

q.a.forEach(answer=>{

const btn =
document.createElement("button");

btn.innerText = answer[0];

btn.onclick = ()=>{

scores[answer[1]]++;

current++;

if(current < questions.length){

showQuestion();

}else{

showResult();

}

};

answersEl.appendChild(btn);

});

}

function top(arr){

return arr.sort((a,b)=>
scores[b]-scores[a])[0];

}

function showResult(){

document.querySelector(".card")
.style.display = "none";

resultEl.classList.remove("hidden");

const energy =
top(["D","Y","A","I"]);

const thinking =
top(["S","J","K","L"]);

const code =
energy + thinking;

resultCode.innerText = code;

resultName.innerText =
typeNames[code];

resultText.innerText =
typeText[code];

}

showQuestion();
