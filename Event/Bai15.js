let searchBox = document.getElementById("searchBox");
let setTime;
searchBox.addEventListener("input", function () {
  clearTimeout(setTime);
  setTime = setTimeout(() => {
    fetch(`https://restcountries.com/v3.1/name/${searchBox.value}`)
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, 500);
});
