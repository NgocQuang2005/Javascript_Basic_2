let textInput = document.getElementById("textInput");
let resultb9 = document.getElementById("resultb9");
textInput.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (e.key === "Enter") {
    resultb9.innerText = "bạn đã nhấn và nút enter";
  }
});
