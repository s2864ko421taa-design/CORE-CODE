const questions = [
  { q:"説明が足りない指示を受けた時、最初に出る反応は？", a:[["まず動いて様子を見る","D"],["理由や目的を確認する","I"],["相手の意図や空気を読む","A"],["安全にできるか確認する","Y"]] },
  { q:"やる気が急に上がるのはどんな時？", a:[["欲しい結果が見えた時","D"],["仕組みが理解できた時","I"],["気持ちが動いた時","A"],["安心して続けられそうな時","Y"]] },
  { q:"行動前に一番気になることは？", a:[["今すぐ動けるか","D"],["納得できる理由があるか","I"],["気持ちが乗るか","A"],["失敗しにくいか","Y"]] },
  { q:"楽しいと感じやすい場面は？", a:[["刺激や勝負がある時","D"],["新しい発見がある時","I"],["誰かと感情を共有できた時","A"],["落ち着いて過ごせる時","Y"]] },
  { q:"誰かに止められた時、まず頭に浮かぶのは？", a:[["でもやってみたい","D"],["なぜ止めるのか知りたい","I"],["相手の気持ちも分かる","A"],["やめた方が安全かも","Y"]] },

  { q:"会話中、最初に反応しやすいのは？", a:[["今出た言葉","S"],["話の流れ","J"],["場全体の空気","K"],["言葉の裏や本音","L"]] },
  { q:"考え事をする時、近いのは？", a:[["直感で答えが出る","S"],["順番に整理する","J"],["全体像から見る","K"],["根本まで掘る","L"]] },
  { q:"説明を聞く時、理解しやすいのは？", a:[["実例を先に見る","S"],["順番に説明される","J"],["全体像を先に知る","K"],["理由や背景まで聞く","L"]] },
  { q:"人の発言で引っかかりやすいのは？", a:[["言葉の強さ","S"],["前後のつながり","J"],["場とのズレ","K"],["矛盾や本音","L"]] },
  { q:"議論で自然に使いやすい武器は？", a:[["反応の速さ","S"],["説明の分かりやすさ","J"],["俯瞰した視点","K"],["深掘りした問い","L"]] },

  { q:"初対面で無意識に確認しているのは？", a:[["テンポや勢い","D"],["話が通じるか","I"],["感情の温度感","A"],["安心できる雰囲気か","Y"]] },
  { q:"褒められて一番残りやすい言葉は？", a:[["行動力あるね","D"],["考え方が面白いね","I"],["優しいね","A"],["安心するね","Y"]] },
  { q:"ピンチの時、出やすい動きは？", a:[["まず突破口を探す","D"],["原因を理解しようとする","I"],["感情が表に出る","A"],["安全策を探す","Y"]] },
  { q:"人と話していて疲れやすいのは？", a:[["テンポが遅すぎる人","D"],["話が浅すぎる人","I"],["反応が冷たい人","A"],["不安定で読めない人","Y"]] },
  { q:"一番ストレスになるのは？", a:[["行動を止められること","D"],["意味が分からないまま進むこと","I"],["気持ちを否定されること","A"],["安心を壊されること","Y"]] },

  { q:"何かを覚える時、残りやすいのは？", a:[["その場の反応","S"],["流れや手順","J"],["全体の位置関係","K"],["深い理由や違和感","L"]] },
  { q:"考え込んでいる時、周りから見える姿は？", a:[["すぐ答えを出そうとする","S"],["整理しながら話す","J"],["全体を見て黙る","K"],["一点を深く掘り続ける","L"]] },
  { q:"会話で無意識に探しているものは？", a:[["相手の反応","S"],["話の流れ","J"],["場のバランス","K"],["隠れた矛盾","L"]] },
  { q:"人の説明で気になりやすいのは？", a:[["勢いや言い方","S"],["筋道が通っているか","J"],["全体と合っているか","K"],["本心や根本理由","L"]] },
  { q:"問題が起きた時、最初にするのは？", a:[["すぐ対処する","S"],["原因を整理する","J"],["全体状況を見る","K"],["根本原因まで掘る","L"]] }
];

let current = 0;

let scores = {
  D:0,Y:0,A:0,I:0,
  S:0,J:0,K:0,L:0
};

const typeList = [
  "DS","DJ","DK","DL",
  "AS","AJ","AK","AL",
  "YS","YJ","YK","YL",
  "IS","IJ","IK","IL"
];

function showQuestion(){
  const questionEl = document.getElementById("question");
  if(!questionEl) return;

  const q = questions[current];

  questionEl.innerText = q.q;
  document.getElementById("answers").innerHTML = "";
  document.getElementById("count").innerText = (current + 1) + " / " + questions.length;

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

    document.getElementById("answers").appendChild(btn);
  });
}

function getRank(list, rank){
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
    ${data.strengths.map(function(x){ return "<p>・" + x + "</p>"; }).join("")}

    <h3>弱み</h3>
    ${data.weak.map(function(x){ return "<p>・" + x + "</p>"; }).join("")}

    <h3>向いていること</h3>
    ${data.jobs.map(function(x){ return "<p>・" + x + "</p>"; }).join("")}

    <h3>相性◎</h3>
    ${data.match.map(function(x){ return "<p>・" + x + "</p>"; }).join("")}
  `;
}

function setupTypesPage(){
  const mainArea = document.getElementById("mainTypes");
  if(!mainArea) return;

  const subAreaBox = document.getElementById("subArea");
  const subArea = document.getElementById("subTypes");

  mainArea.innerHTML = "";

  typeList.forEach(function(main){
    const card = document.createElement("div");
    card.className = "type-card";
    card.innerText = main;

    card.onclick = function(){
      subAreaBox.classList.remove("hidden");
      document.getElementById("selectedMain").innerText = "メイン：" + main;

      subArea.innerHTML = "";

      typeList.forEach(function(sub){
        const subCard = document.createElement("div");
        subCard.className = "type-card";
        subCard.innerText = sub;

        subCard.onclick = function(){
          location.href = "detail.html?type=" + main + "-" + sub;
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
