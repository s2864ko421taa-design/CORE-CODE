const questions = [

{ q:"退屈な時間が続くとどうなる？", a:[["刺激を探す","D"],["考え事を始める","I"],["誰かと話したくなる","A"],["落ち着けるなら平気","Y"]] },

{ q:"新しい環境に入った時どうなりやすい？", a:[["とりあえず動く","D"],["観察して理解する","I"],["空気を感じる","A"],["安全確認する","Y"]] },

{ q:"失敗した時に一番気になるのは？", a:[["次どうするか","D"],["原因","I"],["周囲の反応","A"],["同じ失敗を防ぐこと","Y"]] },

{ q:"人と揉めた時どうなる？", a:[["ぶつかってでも進める","D"],["話を整理する","I"],["感情が気になる","A"],["空気を悪くしたくない","Y"]] },

{ q:"やる気が切れやすいのは？", a:[["刺激がない時","D"],["理解できない時","I"],["感情が乗らない時","A"],["不安が強い時","Y"]] },

{ q:"人を見る時に最初に感じやすいのは？", a:[["勢い","D"],["考え方","I"],["感情","A"],["安心感","Y"]] },

{ q:"予定が急に変わった時どうする？", a:[["その場で対応する","D"],["状況整理する","I"],["周囲の反応を見る","A"],["少し不安になる","Y"]] },

{ q:"頑張れる理由になりやすいのは？", a:[["勝ちたい","D"],["理解したい","I"],["気持ちを届けたい","A"],["安心したい","Y"]] },

{ q:"人から急かされた時どうなる？", a:[["逆に燃える","D"],["理由を考える","I"],["焦りが出る","A"],["ミスが怖くなる","Y"]] },

{ q:"好きになりやすい人は？", a:[["行動力ある人","D"],["頭良い人","I"],["感情豊かな人","A"],["安心できる人","Y"]] },

{ q:"自分が一番嫌なのは？", a:[["動けないこと","D"],["理解できないこと","I"],["感情を抑えること","A"],["安心が壊れること","Y"]] },

{ q:"何かを始める時の原動力は？", a:[["勢い","D"],["興味","I"],["感情","A"],["安定","Y"]] },

{ q:"気づいたらやっていることは？", a:[["まず動く","D"],["考察する","I"],["感情表現する","A"],["安全確認する","Y"]] },

{ q:"ストレス時に出やすい反応は？", a:[["突っ走る","D"],["考え込む","I"],["感情が溢れる","A"],["慎重になる","Y"]] },

{ q:"説明を聞いている時に理解しやすいのは？", a:[["実際に見る","S"],["順番説明","J"],["全体像","K"],["理由や本質","L"]] },

{ q:"人の話を聞く時に無意識で見やすいのは？", a:[["言葉そのもの","S"],["流れ","J"],["場全体","K"],["矛盾や裏","L"]] },

{ q:"問題が起きた時まずすることは？", a:[["すぐ対処","S"],["順番整理","J"],["全体確認","K"],["原因深掘り","L"]] },

{ q:"説明する時どうなりやすい？", a:[["簡潔","S"],["順序立てる","J"],["全体から話す","K"],["細かく掘る","L"]] },

{ q:"会話中に一番気になるのは？", a:[["反応速度","S"],["話の流れ","J"],["空気感","K"],["本音","L"]] },

{ q:"理解したと思う瞬間は？", a:[["すぐ使えそう","S"],["整理できた","J"],["全体が繋がった","K"],["本質が見えた","L"]] },

{ q:"考える時に近い感覚は？", a:[["直感で掴む","S"],["整理していく","J"],["全体を見る","K"],["奥まで潜る","L"]] },

{ q:"人の説明で引っかかる部分は？", a:[["言い方","S"],["筋道","J"],["全体とのズレ","K"],["矛盾","L"]] },

{ q:"議論で自然に使いやすいのは？", a:[["反応速度","S"],["説明力","J"],["俯瞰視点","K"],["深掘り","L"]] },

{ q:"初めて知る内容に対してどうなる？", a:[["まず触る","S"],["整理しながら覚える","J"],["全体理解から入る","K"],["深く知りたくなる","L"]] },

{ q:"会話でズレを感じやすいのは？", a:[["テンポ","S"],["流れ","J"],["空気","K"],["本心","L"]] },

{ q:"人を見る時に無意識でやりやすいのは？", a:[["反応を見る","S"],["話の組み立てを見る","J"],["周囲との関係を見る","K"],["裏側を考える","L"]] },

{ q:"覚えやすい情報は？", a:[["印象","S"],["順番","J"],["全体図","K"],["理由","L"]] },

{ q:"納得しやすい説明は？", a:[["実例","S"],["順序","J"],["全体像","K"],["根本理由","L"]] },

{ q:"違和感を感じやすいのは？", a:[["反応のズレ","S"],["話の順番","J"],["空気の乱れ","K"],["矛盾","L"]] },

{ q:"考え込む時どうなりやすい？", a:[["すぐ答えを出す","S"],["整理し続ける","J"],["全体を見渡す","K"],["深掘りが止まらない","L"]] },

{ q:"説明を受ける時に安心するのは？", a:[["すぐ試せる","S"],["順番が綺麗","J"],["全体像が分かる","K"],["理由が深い","L"]] },

{ q:"人と会話していて楽しい瞬間は？", a:[["テンポが合う","S"],["話が整理される","J"],["空気が噛み合う","K"],["深い話になる","L"]] },

{ q:"理解できない相手に感じやすいのは？", a:[["反応遅い","S"],["話が飛ぶ","J"],["空気読めない","K"],["浅い","L"]] },

{ q:"何かを学ぶ時どうしやすい？", a:[["触りながら覚える","S"],["順番に覚える","J"],["全体理解する","K"],["根本から理解する","L"]] },

{ q:"説明する時に無意識でやりやすいのは？", a:[["例を出す","S"],["順番立てる","J"],["全体を先に言う","K"],["深く掘る","L"]] },

{ q:"会話中に頭で起きやすいのは？", a:[["反応する","S"],["整理する","J"],["俯瞰する","K"],["分析する","L"]] },

{ q:"気づいたら考えていることは？", a:[["今どう動くか","S"],["どう整理するか","J"],["全体どうなってるか","K"],["本当は何か","L"]] },

{ q:"一番理解したくなるのは？", a:[["使い方","S"],["仕組み","J"],["全体構造","K"],["本質","L"]] }

{ q:"急なチャンスが来た時どうする？", a:[["すぐ掴む","D"],["情報を見る","I"],["気持ちが動くか","A"],["安全か確認する","Y"]] },

{ q:"人と一緒にいる時に大事なのは？", a:[["刺激","D"],["知的さ","I"],["感情共有","A"],["安心感","Y"]] },

{ q:"一番ストレスになるのは？", a:[["退屈","D"],["意味不明","I"],["冷たい空気","A"],["不安定さ","Y"]] },

{ q:"何かを決める時どうなりやすい？", a:[["直感で決める","D"],["納得して決める","I"],["気持ちで決める","A"],["慎重に決める","Y"]] },

{ q:"人から期待された時どうなる？", a:[["燃える","D"],["プレッシャー感じる","I"],["応えたくなる","A"],["失敗怖くなる","Y"]] },

{ q:"楽しいと感じる瞬間は？", a:[["挑戦してる時","D"],["理解できた時","I"],["感情共有できた時","A"],["落ち着ける時","Y"]] },

{ q:"追い込まれた時どうなる？", a:[["突破しようとする","D"],["考え続ける","I"],["感情が出る","A"],["慎重になる","Y"]] },

{ q:"人を見る時に気になるのは？", a:[["勢い","D"],["考え方","I"],["優しさ","A"],["安心感","Y"]] },

{ q:"自分らしいと思う瞬間は？", a:[["動いてる時","D"],["考えてる時","I"],["感情を出せた時","A"],["安心してる時","Y"]] },

{ q:"本能的に避けたいのは？", a:[["退屈","D"],["浅さ","I"],["孤独","A"],["不安","Y"]] },

{ q:"直感で信じやすいのは？", a:[["勢い","D"],["理屈","I"],["感情","A"],["安定","Y"]] }

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
