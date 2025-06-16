// function getFormvalue() {
//   let form1 = document.getElementById("form1");
//   let cvArr = Array.from(form1);
//   for (let val of cvArr) {
//     if (val.type !== "submit") {
//       console.log(val.value);
//     }
//   }
// }
//cách ngăn chặn hành vi submit.
let form1 = document.getElementById("form1");
form1.addEventListener("submit", function (e) {
  e.preventDefault();
  let cvArr = Array.from(form1);
  for (let val of cvArr) {
    if (val.type !== "submit") {
      console.log(val.value);
    }
  }
});
