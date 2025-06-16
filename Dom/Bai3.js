const messi = document.getElementById("messi");

function set_background() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Number((Math.random() * 1).toFixed(2));

  messi.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
}
