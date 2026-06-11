const const questions = [
  // 1〜12 メイン D/I/A/Y
  { q:"初めてのことに挑戦する時、最も近い行動はどれですか？", a:[["とりあえずやってみる","D"],["情報を集めて理解する","I"],["誰かと一緒に進める","A"],["安全かどうか確認する","Y"]] },
  { q:"問題が起きた時、最初に意識することは？", a:[["解決のために動く","D"],["原因を考える","I"],["周りへの影響を見る","A"],["被害を最小限にする","Y"]] },
  { q:"初対面の人と話す時、無意識に見ている部分は？", a:[["行動力","D"],["考え方","I"],["人柄","A"],["誠実さ","Y"]] },
  { q:"失敗した時、最初に考えることは？", a:[["次どうするか","D"],["なぜ失敗したか","I"],["誰かを傷つけていないか","A"],["同じ失敗を防ぐ方法","Y"]] },
  { q:"人から相談された時、どうすることが多いですか？", a:[["解決策を出す","D"],["状況を整理する","I"],["気持ちを聞く","A"],["慎重に対応する","Y"]] },
  { q:"グループ活動で自然と取りやすい役割は？", a:[["引っ張る","D"],["作戦を考える","I"],["まとめ役になる","A"],["サポートする","Y"]] },
  { q:"急なトラブルが起きた時の反応は？", a:[["まず動く","D"],["状況分析する","I"],["周囲を気遣う","A"],["落ち着いて対処する","Y"]] },
  { q:"あなたが評価されたいのは？", a:[["行動力","D"],["理解力","I"],["優しさ","A"],["信頼性","Y"]] },
  { q:"人と意見が違った時は？", a:[["自分の意見を言う","D"],["理由を確認する","I"],["相手を理解しようとする","A"],["穏便に済ませたい","Y"]] },
  { q:"仕事や勉強で最も大切だと思うのは？", a:[["結果","D"],["理解","I"],["協力","A"],["安定","Y"]] },
  { q:"プレッシャーを感じる時、どうすることが多いですか？", a:[["燃える","D"],["最善策を考える","I"],["誰かに相談する","A"],["慎重になる","Y"]] },
  { q:"自分の強みとして最も近いものは？", a:[["行動力","D"],["分析力","I"],["共感力","A"],["継続力","Y"]] },

  // 13〜24 メイン S/J/K/L
  { q:"新しいことに挑戦する理由として最も近いものは？", a:[["面白そうだから","S"],["成長できそうだから","J"],["勝ちたいから","K"],["本当に好きだから","L"]] },
  { q:"目標を立てる時に最も重視するものは？", a:[["ワクワクするか","S"],["計画的に進められるか","J"],["一番を目指せるか","K"],["納得できるか","L"]] },
  { q:"休日の予定の立て方は？", a:[["その日の気分","S"],["事前に決める","J"],["自分磨きをする","K"],["好きなことを深める","L"]] },
  { q:"何かを続ける理由として一番近いものは？", a:[["楽しいから","S"],["必要だから","J"],["結果が欲しいから","K"],["諦めたくないから","L"]] },
  { q:"人生で求めるものは？", a:[["自由","S"],["成長","J"],["成功","K"],["信念","L"]] },
  { q:"競争がある環境では？", a:[["楽しむ","S"],["作戦を考える","J"],["勝ちに行く","K"],["自分のやり方を貫く","L"]] },
  { q:"どんな人に憧れますか？", a:[["自由な人","S"],["賢い人","J"],["強い人","K"],["一途な人","L"]] },
  { q:"何かを学ぶ時の目的は？", a:[["面白いから","S"],["理解したいから","J"],["活かしたいから","K"],["極めたいから","L"]] },
  { q:"やる気が出るのはどんな時？", a:[["刺激がある時","S"],["目標が明確な時","J"],["評価される時","K"],["好きなことをしている時","L"]] },
  { q:"将来を考える時に最も近いものは？", a:[["楽しそうか","S"],["現実的か","J"],["上を目指せるか","K"],["後悔しないか","L"]] },
  { q:"一番嫌なのは？", a:[["退屈","S"],["無計画","J"],["負けること","K"],["裏切ること","L"]] },
  { q:"あなたを突き動かすものは？", a:[["好奇心","S"],["向上心","J"],["競争心","K"],["信念","L"]] },

  // 25〜36 サブ D/I/A/Y
  { q:"人生の大事な選択をする時、最も近いものは？", a:[["まず行動する","D"],["よく考える","I"],["周囲との関係を見る","A"],["安全性を重視する","Y"]] },
  { q:"新しい職場や学校では？", a:[["自分から話しかける","D"],["観察する","I"],["周囲に合わせる","A"],["様子を見る","Y"]] },
  { q:"理想のリーダーは？", a:[["行動する人","D"],["頭の良い人","I"],["思いやりのある人","A"],["信頼できる人","Y"]] },
  { q:"人から注意された時は？", a:[["改善しようとする","D"],["理由を考える","I"],["気持ちを考える","A"],["同じ失敗を防ぐ","Y"]] },
  { q:"チームで大切だと思うものは？", a:[["行動力","D"],["戦略","I"],["協調性","A"],["安定感","Y"]] },
  { q:"人と話す時に重視することは？", a:[["結論","D"],["内容","I"],["気持ち","A"],["信頼","Y"]] },
  { q:"困難な状況では？", a:[["突破を目指す","D"],["分析する","I"],["協力を求める","A"],["慎重に進める","Y"]] },
  { q:"尊敬されるなら？", a:[["強い人","D"],["賢い人","I"],["優しい人","A"],["誠実な人","Y"]] },
  { q:"成功のために必要だと思うのは？", a:[["行動","D"],["知識","I"],["人脈","A"],["継続","Y"]] },
  { q:"あなたが安心できる環境は？", a:[["動きがある","D"],["学びがある","I"],["人との繋がりがある","A"],["安定している","Y"]] },
  { q:"一番嬉しい褒め言葉は？", a:[["行動力があるね","D"],["頭いいね","I"],["優しいね","A"],["真面目だね","Y"]] },
  { q:"あなたらしいと思うものは？", a:[["挑戦","D"],["思考","I"],["共感","A"],["継続","Y"]] },
  // 37〜48 サブ S/J/K/L
{ q:"追い込まれた時、最後に出る自分は？", a:[["勢いで突破する","S"],["冷静に立て直す","J"],["勝ち筋を探す","K"],["意地でも貫く","L"]] },
  { q:"誰かに否定された時、心の奥で一番強い反応は？", a:[["まあ別にいいかと思う","S"],["改善点を探す","J"],["見返したくなる","K"],["自分の想いを守りたくなる","L"]] },
  { q:"どうしても譲れない場面では？", a:[["自由に動きたい","S"],["筋道を通したい","J"],["勝てる形にしたい","K"],["信じたものを曲げたくない","L"]] },
  { q:"大切なものを失いそうな時、最初に出る感情は？", a:[["逃げずに動きたい","S"],["どう守るか考える","J"],["絶対に奪われたくない","K"],["手放したくない","L"]] },
  { q:"限界まで疲れた時、それでも残るものは？", a:[["楽しいことへの欲","S"],["やるべきことへの責任","J"],["結果への執着","K"],["大切な想い","L"]] },
  { q:"本気で悔しい時、何を考えやすい？", a:[["次は面白くしてやる","S"],["次はもっと上手くやる","J"],["次は絶対勝つ","K"],["次は自分を裏切らない","L"]] },
  { q:"人に理解されない時、一番つらいのは？", a:[["自由を邪魔されること","S"],["努力が伝わらないこと","J"],["実力を低く見られること","K"],["本心を分かってもらえないこと","L"]] },
  { q:"人生で一番避けたい終わり方は？", a:[["退屈なまま終わる","S"],["何も積み上がらない","J"],["何も成し遂げられない","K"],["自分の想いを捨てる","L"]] },
  { q:"心が折れそうな時、自分を動かす言葉は？", a:[["まだ面白くできる","S"],["まだ改善できる","J"],["まだ負けてない","K"],["まだ諦めてない","L"]] },
  { q:"本気になるきっかけは？", a:[["面白そうだと思った時","S"],["成長できると分かった時","J"],["勝てる可能性が見えた時","K"],["守りたいものができた時","L"]] },
  { q:"一番怒りを感じるのは？", a:[["自由を奪われること","S"],["努力を乱されること","J"],["負けを決めつけられること","K"],["大切なものを軽く扱われること","L"]] },
  { q:"最後に守りたいものは？", a:[["自由な心","S"],["積み上げたもの","J"],["成し遂げた証","K"],["信じ続けた想い","L"]] }
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
