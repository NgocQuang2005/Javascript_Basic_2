//Viết chương trình JavaScript để tính sự khác biệt đối xứng giữa hai mảng cho trước, sử dụng hàm được cung cấp làm bộ so sánh.

function bai132(arr1, arr2, fn) {
  let result = [];
  for (let a of arr1) {
    if (!arr2.some((b) => fn(a, b))) {
      result.push(a);
    }
  }
  for (let b of arr2) {
    if (!arr1.some((a) => fn(b, a))) {
      result.push(b);
    }
  }
  return result;
}

let numa = [1, 1.2, 1.5, 3, 0];
let numb = [1.9, 3, 0, 3.9];
const sosanh = (a, b) => Math.round(a) === Math.round(b);
console.log(bai132(numa, numb, sosanh));
