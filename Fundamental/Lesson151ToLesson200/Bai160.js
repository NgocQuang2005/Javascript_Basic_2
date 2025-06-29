//Viết chương trình JavaScript để thay đổi mảng ban đầu nhằm lọc ra các giá trị được chỉ định, dựa trên hàm lặp cho sẵn.
function bai160(arr, arrPull, fn) {
  const valuePull = arrPull.map(fn);
  for (let i = arr.length - 1; i >= 0; i--) {
    if (valuePull.includes(fn(arr[i]))) {
      arr.splice(i, 1);
    }
  }
}
var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
bai160(myArray, [{ x: 1 }, { x: 3 }], (o) => o.x);
console.log(myArray); // [{x:2}]
