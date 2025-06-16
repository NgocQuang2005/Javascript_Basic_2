function updateProgress() {
  let input = document.getElementById("inputPercent");
  let progress = document.getElementById("progressBar");
  let valueInput = Number(input.value);
  progress.style.width = `${valueInput}%`;
  progress.innerText = `${valueInput}%`;
  input.value = "";
}
