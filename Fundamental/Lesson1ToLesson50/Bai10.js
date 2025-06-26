//Viết chương trình JavaScript để trích xuất các giá trị ở các chỉ mục được chỉ định từ một mảng được chỉ định.
function b10(arr, arrIndex) {
  if (arrIndex.length > 0) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arrIndex.length; j++) {
        if (arrIndex[j] === i) {
          result.push(arr[i]);
        }
      }
    }
    return result;
  } else {
    return [];
  }
}
let arra1 = ["a", "b", "c", "d", "e", "f"];
console.log(b10(arra1, [1, 3]));
let arra2 = [1, 2, 3, 4, 5, 6, 7];
console.log(b10(arra2, [4]));
console.log(b10(arra2, []));
