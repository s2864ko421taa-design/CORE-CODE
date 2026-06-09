const baseTypes = {
  DS:"突破者", DJ:"戦術家", DK:"統率者", DL:"執念者",
  YS:"守護者", YJ:"支援者", YK:"調律者", YL:"分析者",
  AS:"表現者", AJ:"語り手", AK:"共鳴者", AL:"感情探究者",
  IS:"解析者", IJ:"理論家", IK:"策略家", IL:"深層探究者"
};

const typeData = {
  "IL-AS":{
    color:"#5d3fd3",
    title:"深層表現者",
    quote:"理解した熱を、言葉に変える人。",
    strengths:["洞察力","言語化能力","独自視点","熱量"],
    weak:["考えすぎ","論破モード","止まらない"],
    jobs:["創作","考察","企画","分析","議論"],
    match:["YK","AJ","IS"]
  }
};

function getTypeData(code){
  return typeData[code] || {
    color:"#7c3cff",
    title:code,
    quote:"説明準備中",
    strengths:["分析中"],
    weak:["分析中"],
    jobs:["分析中"],
    match:["分析中"]
  };
}
