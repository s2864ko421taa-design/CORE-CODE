const questions = [
  { q:"暇な時どうする？", a:[["刺激を探す","D"],["考え事する","I"],["誰かと話す","A"],["落ち着いて過ごす","Y"]] },
  { q:"初めての場所では？", a:[["まず動く","D"],["観察する","I"],["空気を見る","A"],["安全確認する","Y"]] },
  { q:"失敗したら？", a:[["次を考える","D"],["原因を探す","I"],["周りが気になる","A"],["再発防止する","Y"]] },
  { q:"ケンカしたら？", a:[["ぶつかる","D"],["整理する","I"],["気持ちを見る","A"],["空気を守る","Y"]] },
  { q:"やる気なくなる原因は？", a:[["刺激がない","D"],["理解できない","I"],["気分が乗らない","A"],["不安が強い","Y"]] },
  { q:"初対面で見るのは？", a:[["勢い","D"],["考え方","I"],["感情","A"],["安心感","Y"]] },
  { q:"急な予定変更は？", a:[["対応する","D"],["整理する","I"],["反応を見る","A"],["不安になる","Y"]] },
  { q:"頑張れる理由は？", a:[["勝ちたい","D"],["理解したい","I"],["届けたい","A"],["安心したい","Y"]] },
  { q:"急かされたら？", a:[["燃える","D"],["理由を考える","I"],["焦る","A"],["ミスが怖い","Y"]] },
  { q:"惹かれる人は？", a:[["行動力ある人","D"],["頭いい人","I"],["感情豊かな人","A"],["安心できる人","Y"]] },
  { q:"一番嫌なのは？", a:[["動けない","D"],["分からない","I"],["感情を抑える","A"],["安心が壊れる","Y"]] },
  { q:"始める原動力は？", a:[["勢い","D"],["興味","I"],["感情","A"],["安定","Y"]] },
  { q:"気づいたら何してる？", a:[["動く","D"],["考察する","I"],["表現する","A"],["確認する","Y"]] },
  { q:"ストレス時は？", a:[["突っ走る","D"],["考え込む","I"],["感情が出る","A"],["慎重になる","Y"]] },
  { q:"チャンスが来たら？", a:[["すぐ掴む","D"],["情報を見る","I"],["気持ちを見る","A"],["安全を見る","Y"]] },
  { q:"人といる時大事なのは？", a:[["刺激","D"],["知的さ","I"],["感情共有","A"],["安心感","Y"]] },
  { q:"強いストレスは？", a:[["退屈","D"],["意味不明","I"],["冷たい空気","A"],["不安定","Y"]] },
  { q:"決める時は？", a:[["直感","D"],["納得","I"],["気持ち","A"],["慎重","Y"]] },
  { q:"期待されたら？", a:[["燃える","D"],["考える","I"],["応えたい","A"],["失敗怖い","Y"]] },
  { q:"楽しい瞬間は？", a:[["挑戦","D"],["理解","I"],["共有","A"],["落ち着き","Y"]] },
  { q:"追い込まれたら？", a:[["突破する","D"],["考える","I"],["感情が出る","A"],["慎重になる","Y"]] },
  { q:"人を見る時は？", a:[["勢い","D"],["考え方","I"],["優しさ","A"],["安心感","Y"]] },
  { q:"自分らしい瞬間は？", a:[["動く時","D"],["考える時","I"],["表現する時","A"],["安心する時","Y"]] },
  { q:"避けたいのは？", a:[["退屈","D"],["浅さ","I"],["孤独","A"],["不安","Y"]] },

  { q:"説明はどれが楽？", a:[["実例","S"],["順番","J"],["全体像","K"],["理由","L"]] },
  { q:"話を聞く時見るのは？", a:[["言葉","S"],["流れ","J"],["場全体","K"],["裏側","L"]] },
  { q:"トラブル時は？", a:[["すぐ対処","S"],["順番整理","J"],["全体確認","K"],["原因深掘り","L"]] },
  { q:"説明する時は？", a:[["短く","S"],["順番に","J"],["全体から","K"],["詳しく","L"]] },
  { q:"会話で気になるのは？", a:[["反応速度","S"],["話の流れ","J"],["空気感","K"],["本音","L"]] },
  { q:"理解できた瞬間は？", a:[["使えそう","S"],["整理できた","J"],["繋がった","K"],["本質が見えた","L"]] },
  { q:"考え方に近いのは？", a:[["直感","S"],["整理","J"],["全体","K"],["深掘り","L"]] },
  { q:"説明で引っかかるのは？", a:[["言い方","S"],["筋道","J"],["ズレ","K"],["矛盾","L"]] },
  { q:"議論で使う武器は？", a:[["反応速度","S"],["説明力","J"],["俯瞰","K"],["深掘り","L"]] },
  { q:"初めて知る内容は？", a:[["触る","S"],["整理する","J"],["全体から","K"],["深く知る","L"]] },
  { q:"会話のズレは？", a:[["テンポ","S"],["流れ","J"],["空気","K"],["本心","L"]] },
  { q:"人を見る時するのは？", a:[["反応を見る","S"],["話の形を見る","J"],["関係を見る","K"],["裏を考える","L"]] },
  { q:"覚えやすいのは？", a:[["印象","S"],["順番","J"],["全体図","K"],["理由","L"]] },
  { q:"納得しやすいのは？", a:[["実例","S"],["順序","J"],["全体像","K"],["根本理由","L"]] },
  { q:"違和感を感じるのは？", a:[["反応のズレ","S"],["順番のズレ","J"],["空気の乱れ","K"],["矛盾","L"]] },
  { q:"考え込む時は？", a:[["答えを出す","S"],["整理する","J"],["全体を見る","K"],["深掘る","L"]] },
  { q:"説明で安心するのは？", a:[["すぐ試せる","S"],["順番が綺麗","J"],["全体像がある","K"],["理由が深い","L"]] },
  { q:"会話が楽しいのは？", a:[["テンポが合う","S"],["整理される","J"],["空気が合う","K"],["深い話になる","L"]] },
  { q:"苦手な相手は？", a:[["反応が遅い","S"],["話が飛ぶ","J"],["空気を読まない","K"],["浅い","L"]] },
  { q:"学ぶ時は？", a:[["触って覚える","S"],["順番に覚える","J"],["全体を掴む","K"],["根本から理解","L"]] },
  { q:"説明でやりがちなのは？", a:[["例を出す","S"],["順番に話す","J"],["全体を先に言う","K"],["深く掘る","L"]] },
  { q:"会話中の頭の中は？", a:[["反応する","S"],["整理する","J"],["俯瞰する","K"],["分析する","L"]] },
  { q:"気づくと考えるのは？", a:[["今どう動くか","S"],["どう整理するか","J"],["全体どうか","K"],["本当は何か","L"]] },
  { q:"一番知りたいのは？", a:[["使い方","S"],["仕組み","J"],["全体構造","K"],["本質","L"]] }
];
let current = 0;

let scores = {
 main:{D:0,Y:0,A:0,I:0,S:0,J:0,K:0,L:0},
 sub:{D:0,Y:0,A:0,I:0,S:0,J:0,K:0,L:0},
 total:{D:0,Y:0,A:0,I:0,S:0,J:0,K:0,L:0}
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

if(current < 24){
    scores.main[answer[1]]++;
}else{
    scores.sub[answer[1]]++;
}

scores.total[answer[1]]++;

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

  const energySorted = ["D","Y","A","I"].sort((a,b)=>scores[b]-scores[a]);
const thinkingSorted = ["S","J","K","L"].sort((a,b)=>scores[b]-scores[a]);

const energyMain = energySorted[0];
const thinkingMain = thinkingSorted[0];

const energySub = scores[energySorted[1]] > 0 ? energySorted[1] : energyMain;
const thinkingSub = scores[thinkingSorted[1]] > 0 ? thinkingSorted[1] : thinkingMain;
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

let current = 0;

let scores = {
  main: { D:0, Y:0, A:0, I:0, S:0, J:0, K:0, L:0 },
  sub:  { D:0, Y:0, A:0, I:0, S:0, J:0, K:0, L:0 },
  total:{ D:0, Y:0, A:0, I:0, S:0, J:0, K:0, L:0 }
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
  document.getElementById("count").innerText =
    (current + 1) + " / " + questions.length;

  q.a.forEach(function(answer){
    const btn = document.createElement("button");
    btn.innerText = answer[0];

    btn.onclick = function(){
      const key = answer[1];

      // 前半24問はメイン、後半24問はサブ
      if(current < 24){
        scores.main[key]++;
      }else{
        scores.sub[key]++;
      }

      // グラフ表示用の合計
      scores.total[key]++;

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

function getTop(list, scoreObj){
  const sorted = list.slice().sort(function(a,b){
    return scoreObj[b] - scoreObj[a];
  });

  return sorted[0];
}

function showResult(){
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  const energyKeys = ["D","Y","A","I"];
  const thinkingKeys = ["S","J","K","L"];

  // メイン診断
  const mainEnergy = getTop(energyKeys, scores.main);
  const mainThinking = getTop(thinkingKeys, scores.main);
  const mainCode = mainEnergy + mainThinking;

  // サブ診断
  const subEnergy = getTop(energyKeys, scores.sub);
  const subThinking = getTop(thinkingKeys, scores.sub);
  const subCode = subEnergy + subThinking;

  const fullCode = mainCode + "-" + subCode;

  const data = getTypeData(fullCode);

  document.getElementById("resultCode").innerText = fullCode;
  document.getElementById("resultName").innerText = data.title;
  document.getElementById("resultText").innerHTML = makeDetailHTML(data);
  document.getElementById("result").style.borderColor = data.color;

  document.getElementById("detailButton").onclick = function(){
    location.href = "detail.html?type=" + fullCode;
  };

  const energyTotal =
    scores.total.D + scores.total.Y + scores.total.A + scores.total.I;

  const thinkingTotal =
    scores.total.S + scores.total.J + scores.total.K + scores.total.L;

  setBar("D", scores.total.D, energyTotal);
  setBar("I", scores.total.I, energyTotal);
  setBar("A", scores.total.A, energyTotal);
  setBar("Y", scores.total.Y, energyTotal);

  setBar("S", scores.total.S, thinkingTotal);
  setBar("J", scores.total.J, thinkingTotal);
  setBar("K", scores.total.K, thinkingTotal);
  setBar("L", scores.total.L, thinkingTotal);
}

function setBar(key, value, total){
  const percent = total === 0 ? 0 : Math.round(value / total * 100);

  const bar = document.getElementById("bar" + key);
  const text = document.getElementById("text" + key);

  if(bar) bar.style.width = percent + "%";
  if(text) text.innerText = key + percent + "%";
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

    <h3>相性</h3>
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

showQuestion();
setupTypesPage();
setupDetailPage();

function setBar(key, value, total){
  const percent = Math.round(value / total * 100);

  document.getElementById("bar" + key).style.width = percent + "%";
  document.getElementById("text" + key).innerText = percent + "%";
}

showQuestion();
setupTypesPage();
setupDetailPage();
