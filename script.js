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
  { q:"議論で強いのは？", a:[["反応速度","S"],["説明力","J"],["俯瞰視点","K"],["深掘り","L"]] }
];

let current = 0;

let scores = {
  D:0,Y:0,A:0,I:0,
  S:0,J:0,K:0,L:0
};

function showQuestion(){
  const questionEl = document.getElementById("question");
  if(!questionEl) return;

  const q = questions[current];
  questionEl.innerText = q.q;

  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  document.getElementById("count").innerText =
  (current + 1) + " / " + questions.length;

  q.a.forEach(function(answer){
    const btn = document.createElement("button");
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

    answers.appendChild(btn);
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
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  const energyMain = getRank(["D","Y","A","I"],1);
  const energySub = getRank(["D","Y","A","I"],2);
  const thinkingMain = getRank(["S","J","K","L"],1);
  const thinkingSub = getRank(["S","J","K","L"],2);

  const mainCode = energyMain + thinkingMain;
  const subCode = energySub + thinkingSub;
  const fullCode = mainCode + "-" + subCode;

  const data = getTypeData(fullCode);

  document.getElementById("resultCode").innerText = fullCode;
  document.getElementById("resultName").innerText = data.title;
  document.getElementById("resultText").innerHTML = makeDetailHTML(data);
  document.getElementById("result").style.borderColor = data.color;

  document.getElementById("detailButton").onclick = function(){
    location.href = "detail.html?type=" + fullCode;
  };
}

function makeDetailHTML(data){
  return `
    <p style="color:${data.color};font-size:22px;">${data.quote}</p>

    <h3>強み</h3>
    ${data.strengths.map(x=>"<p>・"+x+"</p>").join("")}

    <h3>弱み</h3>
    ${data.weak.map(x=>"<p>・"+x+"</p>").join("")}

    <h3>向いていること</h3>
    ${data.jobs.map(x=>"<p>・"+x+"</p>").join("")}

    <h3>相性◎</h3>
    ${data.match.map(x=>"<p>・"+x+"</p>").join("")}
  `;
}

function setupTypesPage(){
  const mainArea = document.getElementById("mainTypes");
  if(!mainArea) return;

  const mainList = ["D","A","Y","I"];
  const subList = ["D","A","Y","I"];

  mainList.forEach(function(main){
    const card = document.createElement("div");
    card.className = "type-card";
    card.innerText = main + "型";

    card.onclick = function(){
      document.getElementById("subArea").classList.remove("hidden");
      document.getElementById("selectedMain").innerText =
      "メイン：" + main + "型";

      const subArea = document.getElementById("subTypes");
      subArea.innerHTML = "";

      subList.forEach(function(sub){
        const subCard = document.createElement("div");
        subCard.className = "type-card";
        subCard.innerText = sub + "型";

        subCard.onclick = function(){
          location.href = "detail.html?type=" + main + sub;
        };

        subArea.appendChild(subCard);
      });
    };

    mainArea.appendChild(card);
  });
}

function setupDetailPage(){
  const detailCode = document.getElementById("detailCode");
  if(!detailCode) return;

  const params = new URLSearchParams(location.search);
  const type = params.get("type") || "IL-AS";

  const data = getTypeData(type);

  detailCode.innerText = type;
  document.getElementById("detailName").innerText = data.title;
  document.getElementById("detailText").innerHTML = makeDetailHTML(data);
  document.getElementById("detail").style.borderColor = data.color;
}

showQuestion();
setupTypesPage();
setupDetailPage();
