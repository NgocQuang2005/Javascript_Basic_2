//Viết hàm JavaScript trả về ma trận đơn vị có n hàng x n cột.
function b10(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        console.log("1");
      } else {
        console.log("0");
      }
    }
  }
}
b10(4);
