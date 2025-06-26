//Viết chương trình JavaScript để chuyển đổi một số cụ thể thành một mảng chữ số.
function b7(n) {
  let cvNbToArr = [...`${n}`];
  return cvNbToArr.map((value) => parseInt(value));
}
console.log(b7(1234));
