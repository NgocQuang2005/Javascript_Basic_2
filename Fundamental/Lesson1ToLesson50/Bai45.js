//Viết một chương trình JavaScript để chia các giá trị thành hai nhóm. Nếu một phần tử trong bộ lọc là đúng, phần tử tương ứng trong bộ sưu tập thuộc về nhóm đầu tiên; nếu không, nó thuộc về nhóm thứ hai.
function b45(arr1, arr2) {
  if (arr1.length > arr2.length || arr1.length < arr2.length) {
    return "Độ dài 2 mảng không bằng nhau nên không xác định được vị trí để phân tách";
  }
  let arrVl = [];
  let arrBl = [];
  for (let i = 0; i < arr1.length; i++) {
    if (Boolean(arr2[i])) {
      arrVl.push(arr1[i]);
    } else {
      arrBl.push(arr1[i]);
    }
  }
  return [arrVl, arrBl];
}
console.log(b45(["beep", "boop", "foo", "bar"], [false, true, false, true]));
