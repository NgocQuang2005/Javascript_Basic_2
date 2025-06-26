//Viết một hàm JavaScript để lấy tất cả các tập hợp con có thể có với tổ hợp có độ dài cố định (ví dụ: 2) trong một mảng.
function bai21(arr, k) {
  const result = [];
  function backtrack(start, combination) {
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      combination.push(arr[i]);
      backtrack(i + 1, combination);
      combination.pop();
    }
  }
  backtrack(0, []);
  return result;
}
const data = ["a", "b", "c", "d"];
console.log(bai21(data, 2));
