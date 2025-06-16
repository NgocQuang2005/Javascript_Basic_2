let nbb13 = document.getElementById("nbb13");
function Check() {
  console.log("okok");
}
nbb13.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("hahahhaha");
});
