//Viết chương trình JavaScript để làm tròn một số đến số chữ số được chỉ định.
function bai152(num, decimalPlaces) {
  return parseFloat(num.toFixed(decimalPlaces));
}

console.log(bai152(3.14159, 2));
