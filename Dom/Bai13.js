let resultWH = document.getElementById("resultWH");
window.addEventListener("resize", function () {
  resultWH.innerHTML = `<div>
        <p>Chiều rộng: ${window.innerWidth}</p>
        <p>Chiều cao: ${window.innerHeight}</p>
    </div>`;
});
