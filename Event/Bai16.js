let localResult = document.getElementById("localResult");
let count = localStorage.getItem("count");
if (!count) {
  count = 0;
} else {
  count = parseInt(count);
}
count++;
localStorage.setItem("count", count);
localResult.innerText = `Count: ${count}`;
