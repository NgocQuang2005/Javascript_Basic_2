let form = document.getElementById("myFormb12");
let nameInputb12 = document.getElementById("nameInputb12");
let emailInputb12 = document.getElementById("emailInputb12");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(nameInputb12.ariaValueMax, emailInputb12.value);
});
