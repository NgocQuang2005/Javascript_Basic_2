let dbclickb10 = document.getElementById("dbclickb10");
let resultb10 = document.getElementById("resultb10");
dbclickb10.addEventListener("dblclick", function (e) {
  e.preventDefault();
  resultb10.innerText = "Bạn đã nhấn 2 lần vào nút click";
});
