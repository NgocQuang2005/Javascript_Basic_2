const parent = document.getElementById("parentBai94");
const children = document.getElementById("children");
parent.addEventListener("click", function (e) {
  console.log("click vào cha");
});
children.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("click vào con");
});
