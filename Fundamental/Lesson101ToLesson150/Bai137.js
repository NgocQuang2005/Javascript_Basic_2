//Viết một chương trình JavaScript để thực hiện sắp xếp ổn định một mảng, bảo toàn các chỉ mục ban đầu của các mục khi giá trị của chúng giống nhau. Trả về một mảng mới thay vì thay đổi mảng ban đầu.`
function bai137(arr) {
  let newArr = arr.map((value, idx) => ({ value, idx }));
  newArr.sort((a, b) => {
    if (a.value > b.value) return 1;
    if (a.value < b.value) return -1;
    return a.idx - b.idx;
  });
  return newArr.map((item) => item.value);
}
const arr = [4, 2, 2, 1, 4, 3];
const sorted = bai137(arr);
console.log(sorted);
console.log(arr);
