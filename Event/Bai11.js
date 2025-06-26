const list = document.getElementById("myListb11");
const btn = document.getElementById("addItemb11");
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    alert(`Bạn đã click vào: ${e.target.textContent}`);
  }
});
btn.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newLi);
});
