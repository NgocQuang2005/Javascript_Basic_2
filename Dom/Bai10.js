const MyForm = document.getElementById("MyForm");

MyForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let radius = document.getElementById("radius");
  let bkinh = parseFloat(radius.value);
  if (isNaN(bkinh) || bkinh < 0) {
    alert("Bán kính phải là số và lớn hơn 0");
    return;
  }

  let thetich = (4 / 3) * Math.PI * Math.pow(bkinh, 3);
  let volume = document.getElementById("volume");
  volume.value = thetich.toFixed(2);
});
