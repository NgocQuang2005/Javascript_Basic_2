function getOptions() {
  const mySelect = document.getElementById("mySelect");
  let arrSelect = Array.from(mySelect);
  let value = [];
  for (let val of arrSelect) {
    value.push(val.value);
  }
  alert(`Count ${mySelect.length}, All Items ${value}`);
}
