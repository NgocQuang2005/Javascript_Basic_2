function createTable() {
  let myTableb7 = document.getElementById("myTableb7");
  let row = document.getElementById("row");
  let column = document.getElementById("column");
  //lấy ra số lượng hàng và cột cần thêm;
  let hang = Number(row.value);
  let cot = Number(column.value);
  console.log(hang, cot);
  for (let r = 0; r < hang; r++) {
    let newRow = myTableb7.insertRow(r);
    for (let c = 0; c < cot; c++) {
      let newCell = newRow.insertCell(c);
      newCell.innerText = "Cột mới";
    }
  }
  row.value = "";
  column.value = "";
}
