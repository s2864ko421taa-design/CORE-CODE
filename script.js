<script>

const question =
"初めての場所でどう動く？";

const answers = [
"直感で動く",
"周囲を見る"
];

document.getElementById("question").innerText =
question;

const box =
document.getElementById("answers");

answers.forEach(text => {

const btn =
document.createElement("button");

btn.innerText = text;

box.appendChild(btn);

});

</script>