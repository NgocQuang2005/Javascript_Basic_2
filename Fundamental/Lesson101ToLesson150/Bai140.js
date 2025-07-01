//Viết một chương trình JavaScript để lấy chỉ số cao nhất mà giá trị cần được chèn vào một mảng để duy trì thứ tự sắp xếp của nó. Điều này dựa trên một hàm lặp được cung cấp.
function bai140(arr, value, fn) {
  const val = fn(value);
  let index = arr.length;
  while (index > 0 && fn(arr[index - 1]) > val) {
    index--;
  }
  return index;
}
console.log(bai140([{ x: 4 }, { x: 5 }], { x: 4 }, (o) => o.x));
//Cần chèn vào sau phần tử x = 4 để vẫn đúng thứ tự (tức là chèn ở index = 1)
