function insert_Row() {
  let insertRow = document.getElementById("sampleTable").insertRow(0);
  let newCell1 = insertRow.insertCell(0);
  let newCell2 = insertRow.insertCell(1);
  newCell2.innerText = "Cột mới";
  newCell1.innerText = "Cột mới";
}
