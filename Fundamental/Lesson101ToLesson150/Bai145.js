//Viết chương trình JavaScript để sắp xếp ngẫu nhiên thứ tự các giá trị mảng, trả về một mảng đã cập nhật
function bai145([...arr]) {
  let arrLength = arr.length;
  while (arrLength) {
    const i = Math.floor(Math.random() * arrLength--);
    [arr[arrLength], arr[i]] = [arr[i], arr[arrLength]];
  }
  return arr;
}
console.log(bai145([1, 2, 3]));
