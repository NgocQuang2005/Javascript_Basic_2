let light = document.querySelector("div.light");
let btnToggle = document.getElementById("toggle_light");
btnToggle.addEventListener("click", function (e) {
  e.preventDefault();
  let classArr = Array.from(light.classList);
  if (!classArr.includes("bgColorLight")) {
    light.classList.add("bgColorLight");
    e.target.innerText = "Tắt bóng";
  } else {
    light.classList.remove("bgColorLight");
    e.target.innerText = "Bật bóng";
  }
});
