let quocgia = document.getElementById("quocgia");
let thudo = document.getElementById("thudo");
let dientich = document.getElementById("dientich");
let danso = document.getElementById("danso");
let error = document.getElementById("err");
let searchQgb18 = document.getElementById("searchQgb18");
let btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", function (e) {
  e.preventDefault();
  let keywords = searchQgb18.value;
  fetch(`https://restcountries.com/v3.1/name/${keywords}`)
    .then((data) => data.json())
    .then((data) => {
      quocgia.innerText = `Quốc gia: ${data[0].name.common}`;
      thudo.innerText = `Thủ đô: ${data[0].capital}`;
      dientich.innerText = `Diện tích: ${data[0].area}`;
      danso.innerText = `Dân số: ${data[0].population}`;

      console.log(data);
    })
    .catch((err) => (error.innerText = `${err}`));
  searchQgb18.value = "";
});
