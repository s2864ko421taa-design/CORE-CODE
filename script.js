<script>
document.getElementById("question").innerText = "初めての場所でどう動く？";

const box = document.getElementById("answers");

const btn1 = document.createElement("button");
btn1.innerText = "直感で動く";
box.appendChild(btn1);

const btn2 = document.createElement("button");
btn2.innerText = "周囲を見る";
box.appendChild(btn2);
</script>