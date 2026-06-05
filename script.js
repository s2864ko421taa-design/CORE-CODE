const questions = [

{
q:"意味が分からないことをやれと言われた時どうする？",
a:[
["とりあえず動く","D"],
["理由を聞く","I"],
["空気を読む","A"],
["安心できるならやる","Y"]
]
},

{
q:"考え事をする時どうなる？",
a:[
["直感で決める","S"],
["順番に整理する","J"],
["全体を見る","K"],
["深く掘る","L"]
]
},

{
q:"覚えやすいのは？",
a:[
["法則","O"],
["繰り返し","C"],
["映像","G"],
["感情","T"]
]
},

{
q:"人間関係で一番欲しいものは？",
a:[
["安心","Q"],
["共感","U"],
["尊敬","F"],
["主導権","N"]
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

IS:"解析者",
IJ:"理論家",
IK:"策略家",
IL:"深層探究者"

};

const typeText = {

DS:"欲しいものへ一直線。",
DJ:"勝つ流れを作る。",
DK:"全体を動かす。",
DL:"極限まで掘り続ける。",

YS:"安心できる日常を守る。",
YJ:"人を支え流れを整える。",
YK:"全体のバランスを整える。",
YL:"壊れない道を探す。",

AS:"感情をそのまま表現する。",
AJ:"感情と物語を紡ぐ。",
AK:"周囲と感情を響かせる。",
AL:"感情の深層へ潜る。",

IS:"瞬時に答えを見つける。",
IJ:"理論で世界を整理する。",
IK:"盤面を読み勝ち筋を作る。",
IL:"根本を理解するまで止まらない。"

};

const typeColors = {

DS:"#ff3b30",
DJ:"#8b0000",
DK:"#d4af37",
DL:"#722f37",

YS:"#90ee90",
YJ:"#228b22",
YK:"#98ff98",
YL:"#1f2a44",

AS:"#ff8c00",
AJ:"#ff69b4",
AK:"#ffd700",
AL:"#7c3cff",

IS:"#c0c0c0",
IJ:"#2f80ed",
IK:"#0b1f4d",
IL:"#111111"

};

const typeImages = {

DS:"images/ds.png",
DJ:"images/dj.png",
DK:"images/dk.png",
DL:"images/dl.png",

YS:"images/ys.png",
YJ:"images/yj.png",
YK:"images/yk.png",
YL:"images/yl.png",

AS:"images/as.png",
AJ:"images/aj.png",
AK:"images/ak.png",
AL:"images/al.png",

IS:"images/is.png",
IJ:"images/ij.png",
IK:"images/ik.png",
IL:"images/il.png"

};

const typeDetails = {

DS:{
strengths:[
"行動力",
"突破力",
"瞬発力"
],
weaknesses:[
"勢い任せ",
"飽きやすい",
"後先を考えない"
]
},

DJ:{
strengths:[
"戦略性",
"計画力",
"効率思考"
],
weaknesses:[
"冷たく見られやすい",
"損得思考"
]
},

DK:{
strengths:[
"統率力",
"責任感",
"決断力"
],
weaknesses:[
"支配的",
"威圧感"
]
},

DL:{
strengths:[
"探究心",
"集中力",
"専門性"
],
weaknesses:[
"執着",
"視野狭窄"
]
},

IL:{
strengths:[
"本質理解",
"考察力",
"独自理論"
],
weaknesses:[
"考えすぎる",
"論破モード",
"思考停止しない"
]
}

};

let current = 0;

let scores = {

D:0,Y:0,A:0,I:0,
S:0,J:0,K:0,L:0,
O:0,C:0,G:0,T:0,
Q:0,U:0,F:0,N:0

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
`${current + 1} / ${questions.length}`;

bar.style.width =
`${((current + 1) / questions.length) * 100}%`;

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

function top(codes){

return codes.sort((a,b)=>
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

const memory =
top(["O","C","G","T"]);

const social =
top(["Q","U","F","N"]);

const mainCode =
energy + thinking;

const fullCode =
`${mainCode}/${memory}${social}`;

document.documentElement
.style.setProperty(
"--accent",
typeColors[mainCode]
);

resultCode.innerText =
fullCode;

resultName.innerText =
typeNames[mainCode];

resultText.innerText =
typeText[mainCode];

const resultImage =
document.getElementById("resultImage");

resultImage.src =
typeImages[mainCode];

const details =
document.getElementById("details");

if(typeDetails[mainCode]){

details.innerHTML = `

<h3>強み</h3>

<ul>

${typeDetails[mainCode]
.strengths
.map(s=>`<li>${s}</li>`)
.join("")}

</ul>

<h3>弱み</h3>

<ul>

${typeDetails[mainCode]
.weaknesses
.map(s=>`<li>${s}</li>`)
.join("")}

</ul>

`;

}

}

showQuestion();