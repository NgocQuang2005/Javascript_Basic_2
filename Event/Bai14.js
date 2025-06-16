let parent = document.getElementById("parent");
let childen = document.getElementById("childen");

parent.addEventListener("click", function (e) {
  console.log("Click cha");
});
childen.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("click con");
});
