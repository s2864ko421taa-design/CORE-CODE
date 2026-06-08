const questions = [

  { q:"意味が分からないことをやれと言われた時どうする？", a:[["とりあえず動く","D"],["理由を聞く","I"],["空気を読む","A"],["安心できるならやる","Y"]] },

  { q:"一番モチベーションが上がる瞬間は？", a:[["欲しいものがある時","D"],["理解できた時","I"],["感情が動いた時","A"],["安心できた時","Y"]] },

  { q:"行動する時に重要なのは？", a:[["勢い","D"],["納得","I"],["気持ち","A"],["安定","Y"]] },

  { q:"楽しいと感じやすいのは？", a:[["刺激","D"],["学び","I"],["感情共有","A"],["落ち着き","Y"]] },

  { q:"人から止められた時どう思う？", a:[["やってから考える","D"],["理由次第","I"],["気持ちは分かる","A"],["不安になる","Y"]] },

  { q:"会話中に一番見ているものは？", a:[["今の発言","S"],["流れ","J"],["全体空気","K"],["本音や裏","L"]] },

  { q:"考え事をする時どうなる？", a:[["直感で決める","S"],["順番に整理する","J"],["全体を見る","K"],["深く掘る","L"]] },

  { q:"話を聞く時に重視するのは？", a:[["テンポ","S"],["順序","J"],["全体像","K"],["本音","L"]] },

  { q:"人の発言を聞く時は？", a:[["単語を見る","S"],["前後の流れを見る","J"],["場全体を見る","K"],["矛盾を見る","L"]] },

  { q:"議論で強いのは？", a:[["反応速度","S"],["説明力","J"],["俯瞰視点","K"],["深掘り","L"]] },

  { q:"初対面で無意識に見てるのは？", a:[["勢い","D"],["話の論理","I"],["感情","A"],["安心感","Y"]] },

  { q:"褒められて一番嬉しいのは？", a:[["行動力","D"],["頭の良さ","I"],["優しさ","A"],["信頼感","Y"]] },

  { q:"ピンチの時どうなりやすい？", a:[["突っ込む","D"],["考える","I"],["感情が出る","A"],["慎重になる","Y"]] },

  { q:"人と話していて疲れるのは？", a:[["遅い人","D"],["浅い人","I"],["冷たい人","A"],["不安定な人","Y"]] },

  { q:"一番許せないのは？", a:[["止められる","D"],["意味不明","I"],["否定される","A"],["裏切られる","Y"]] },

  { q:"説明される時に理解しやすいのは？", a:[["まずやってみる","S"],["順番説明","J"],["全体から説明","K"],["深く理由を聞く","L"]] },

  { q:"考え込む時どうなる？", a:[["即断する","S"],["整理する","J"],["俯瞰する","K"],["深読みする","L"]] },

  { q:"会話で無意識に探すものは？", a:[["反応","S"],["流れ","J"],["空気","K"],["矛盾","L"]] },

  { q:"人の説明で気になる部分は？", a:[["勢い","S"],["筋道","J"],["全体バランス","K"],["本心","L"]] },

  { q:"問題が起きた時に先にすることは？", a:[["すぐ動く","S"],["原因を整理する","J"],["全体状況を見る","K"],["根本原因を掘る","L"]] }

];

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

function showQuestion(){

  const q = questions[current];

  document.getElementById("question")
  .innerText = q.q;

  document.getElementById("answers")
  .innerHTML = "";

  document.getElementById("count")
  .innerText =
  (current + 1)
  + " / "
  + questions.length;

  q.a.forEach(function(answer){

    const btn =
    document.createElement("button");

    btn.innerText = answer[0];

    btn.onclick = function(){

      scores[answer[1]]++;

      current++;

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

function getRank(list,rank){

  const copy = list.slice();

  copy.sort(function(a,b){

    return scores[b] - scores[a];

  });

  return copy[rank - 1];

}

function showResult(){

  document.getElementById("quiz")
  .classList.add("hidden");

  document.getElementById("result")
  .classList.remove("hidden");

  const energyMain =
  getRank(["D","Y","A","I"],1);

  const energySub =
  getRank(["D","Y","A","I"],2);

  const thinkingMain =
  getRank(["S","J","K","L"],1);

  const thinkingSub =
  getRank(["S","J","K","L"],2);

  const mainCode =
  energyMain + thinkingMain;

  const subCode =
  energySub + thinkingSub;

  const fullCode =
  mainCode + "-" + subCode;

  const data =
  typeData[fullCode] || {

    title:fullCode,

    quote:"説明準備中",

    color:"#7c3cff",

    strengths:[
      "分析中"
    ],

    weak:[
      "分析中"
    ],

    jobs:[
      "分析中"
    ],

    match:[
      "分析中"
    ]

  };

  document.getElementById("resultCode")
  .innerText = fullCode;

  document.getElementById("resultName")
  .innerText = data.title;

  document.getElementById("resultText")
  .innerHTML = `

  <div style="
  color:${data.color};
  font-size:22px;
  margin-bottom:20px;
  ">
  ${data.quote}
  </div>

  <div style="margin-top:20px;">
  <h3>強み</h3>
  ${data.strengths.map(s =>
  `<p>・${s}</p>`).join("")}
  </div>

  <div style="margin-top:20px;">
  <h3>弱み</h3>
  ${data.weak.map(w =>
  `<p>・${w}</p>`).join("")}
  </div>

  <div style="margin-top:20px;">
  <h3>向いていること</h3>
  ${data.jobs.map(j =>
  `<p>・${j}</p>`).join("")}
  </div>

  <div style="margin-top:20px;">
  <h3>相性◎</h3>
  ${data.match.map(m =>
  `<p>・${m}</p>`).join("")}
  </div>

  `;

  document.getElementById("result")
  .style.border =
  "3px solid " + data.color;

}

showQuestion();
