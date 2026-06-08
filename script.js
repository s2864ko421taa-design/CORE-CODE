<script>
const questions = [
  {
    q: "初対面でどう動く？",
    a: [
      ["とりあえず話す", "D"],
      ["相手を見る", "Y"]
    ]
  },
  {
    q: "考える時に近いのは？",
    a: [
      ["直感", "S"],
      ["分析", "J"]
    ]
  },
  {
    q: "人間関係で欲しいものは？",
    a: [
      ["刺激", "D"],
      ["安心", "Y"]
    ]
  },
  {
    q: "揉め事が起きたら？",
    a: [
      ["まず動く", "S"],
      ["原因を見る", "J"]
    ]
  },
  {
    q: "好きな環境は？",
    a: [
      ["変化が多い場所", "D"],
      ["落ち着く場所", "Y"]
    ]
  }
];

let current = 0;

let scores = {
  D: 0, Y: 0, A: 0, I: 0,
  S: 0, J: 0, K: 0, L: 0
};

function showQuestion() {
  const q = questions[current];

  document.getElementById("question").innerText = q.q;
  document.getElementById("answers").innerHTML = "";
  document.getElementById("count").innerText = (current + 1) + " / " + questions.length;

  q.a.forEach(function(answer) {
    const btn = document.createElement("button");
    btn.innerText = answer[0];

    btn.onclick = function() {
      scores[answer[1]] = scores[answer[1]] + 1;
      current = current + 1;

      if (current < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };

    document.getElementById("answers").appendChild(btn);
  });
}

function getTop(list) {
  let best = list[0];

  for (let i = 1; i < list.length; i++) {
    if (scores[list[i]] > scores[best]) {
      best = list[i];
    }
  }

  return best;
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  const energy = getTop(["D", "Y", "A", "I"]);
  const thinking = getTop(["S", "J", "K", "L"]);
  const code = energy + thinking;

  const typeNames = {
    DS: "突破者",
    DJ: "戦術家",
    DK: "統率者",
    DL: "執念者",
    YS: "守護者",
    YJ: "支援者",
    YK: "調律者",
    YL: "分析者",
    AS: "表現者",
    AJ: "語り手",
    AK: "共鳴者",
    AL: "感情探究者",
    IS: "解析者",
    IJ: "理論家",
    IK: "策略家",
    IL: "深層探究者"
  };

  const typeText = {
    DS: "勢いと突破力で進むタイプ。",
    DJ: "勝つ流れを組み立てるタイプ。",
    DK: "全体を動かすリーダー型。",
    DL: "限界まで突き詰めるタイプ。",
    YS: "安心できる日常を守るタイプ。",
    YJ: "人を支え流れを整えるタイプ。",
    YK: "全体のバランスを整えるタイプ。",
    YL: "慎重に分析するタイプ。",
    AS: "感情をそのまま表現するタイプ。",
    AJ: "感情や物語を紡ぐタイプ。",
    AK: "周囲と感情を響かせるタイプ。",
    AL: "感情の深層を探究するタイプ。",
    IS: "瞬時に理解して動くタイプ。",
    IJ: "理論で世界を整理するタイプ。",
    IK: "盤面を読み勝ち筋を作るタイプ。",
    IL: "物事の根本を掘り続けるタイプ。"
  };

  document.getElementById("resultCode").innerText = code;
  document.getElementById("resultName").innerText = typeNames[code];
  document.getElementById("resultText").innerText = typeText[code];
}

showQuestion();
</script>
