let lienket = document.getElementById("lienket");
let strong = document.querySelectorAll("p strong");

lienket.addEventListener("mouseover", function (e) {
  e.preventDefault();
  for (let str of strong) {
    str.style.color = "red";
  }
});
lienket.addEventListener("mouseout", function (e) {
  e.preventDefault();
  for (let str of strong) {
    str.style.color = "black";
  }
});
