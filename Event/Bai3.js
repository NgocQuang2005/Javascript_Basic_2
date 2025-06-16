let elmbgColor = document.querySelector(".bgcolorb3");
function b3() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  elmbgColor.style.backgroundColor = `rgb(${r},${g},${b})`;
}
