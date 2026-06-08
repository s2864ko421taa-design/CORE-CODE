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
q:"一番モチベーションが上がる瞬間は？",
a:[
["欲しいものがある時","D"],
["理解できた時","I"],
["感情が動いた時","A"],
["安心できた時","Y"]
]
},
{
q:"行動する時に重要なのは？",
a:[
["勢い","D"],
["納得","I"],
["気持ち","A"],
["安定","Y"]
]
},
{
q:"楽しいと感じやすいのは？",
a:[
["刺激","D"],
["学び","I"],
["感情共有","A"],
["落ち着き","Y"]
]
},
{
q:"人から止められた時どう思う？",
a:[
["やってから考える","D"],
["理由次第","I"],
["気持ちは分かる","A"],
["不安になる","Y"]
]
},
{
q:"会話中に一番見ているものは？",
a:[
["今の発言","S"],
["流れ","J"],
["全体空気","K"],
["本音や裏","L"]
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
q:"気になる言葉は？",
a:[
["今","S"],
["なぜ","J"],
["全体","K"],
["本質","L"]
]
},
{
q:"人の発言を聞く時は？",
a:[
["単語を見る","S"],
["前後の流れを見る","J"],
["場全体を見る","K"],
["矛盾を見る","L"]
]
},
{
q:"議論で強いのは？",
a:[
["反応速度","S"],
["説明力","J"],
["俯瞰視点","K"],
["深掘り","L"]
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
q:"勉強で頭に残るのは？",
a:[
["仕組み理解","O"],
["反復練習","C"],
["図や景色","G"],
["感情経験","T"]
]
},
{
q:"昔の記憶を思い出す時は？",
a:[
["構造","O"],
["身体感覚","C"],
["映像","G"],
["感情","T"]
]
},
{
q:"人を覚える時は？",
a:[
["特徴や共通点","O"],
["何回会ったか","C"],
["顔や雰囲気","G"],
["感情エピソード","T"]
]
},
{
q:"理解しやすい説明は？",
a:[
["法則説明","O"],
["何回も実践","C"],
["図解","G"],
["感情込みの話","T"]
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
},
{
q:"否定された時どうなる？",
a:[
["傷つく","Q"],
["理解してほしくなる","U"],
["見返したくなる","F"],
["主導権を握り返したくなる","N"]
]
},
{
q:"理想の関係性は？",
a:[
["落ち着ける","Q"],
["分かり合える","U"],
["認め合える","F"],
["対等に主導できる","N"]
]
},
{
q:"苦手なのは？",
a:[
["不安定な人","Q"],
["冷たい人","U"],
["見下してくる人","F"],
["支配してくる人","N"]
]
},
{
q:"一番嫌なのは？",
a:[
["否定される","Q"],
["理解されない","U"],
["認められない","F"],
["自由を奪われる","N"]
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
DS:"勢いと突破力で進むタイプ。",
DJ:"勝つ流れを組み立てるタイプ。",
DK:"全体を動かすリーダー型。",
DL:"限界まで突き詰めるタイプ。",
YS:"安心できる日常を守るタイプ。",
YJ:"人を支え流れを整えるタイプ。",
YK:"全体のバランスを整えるタイプ。",
YL:"慎重に分析するタイプ。",
AS:"感情をそのまま表現するタイプ。",
AJ:"感情や物語を紡ぐタイプ。",
AK:"周囲と感情を響かせるタイプ。",
AL:"感情の深層を探究するタイプ。",
IS:"瞬時に理解して動くタイプ。",
IJ:"理論で世界を整理するタイプ。",
IK:"盤面を読み勝ち筋を作るタイプ。",
IL:"物事の根本を掘り続けるタイプ。"
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
L:0,
O:0,
C:0,
G:0,
T:0,
Q:0,
U:0,
F:0,
N:0
};
function showQuestion(){
const q = questions[current];
document.getElementById("question").innerText = q.q;
document.getElementById("answers").innerHTML = "";
document.getElementById("count").innerText =
(current + 1) + " / " + questions.length;
q.a.forEach(function(answer){
const btn = document.createElement("button");
btn.innerText = answer[0];
btn.onclick = function(){
scores[answer[1]] =
scores[answer[1]] + 1;
current = current + 1;
if(current < questions.length){
showQuestion();
}else{
showResult();
}
};
document.getElementById("answers")
.appendChild(btn);
});
}
function getTop(list){
let best = list[0];
for(let i = 1; i < list.length; i++){
if(scores[list[i]] > scores[best]){
best = list[i];
}
}
return best;
}
function showResult(){
document.getElementById("quiz")
.classList.add("hidden");
document.getElementById("result")
.classList.remove("hidden");
const energy =
getTop(["D","Y","A","I"]);
const thinking =
getTop(["S","J","K","L"]);
const code =
energy + thinking;
document.getElementById("resultCode")
.innerText = code;
document.getElementById("resultName")
.innerText = typeNames[code];
document.getElementById("resultText")
.innerText = typeText[code];
}
showQuestion();
