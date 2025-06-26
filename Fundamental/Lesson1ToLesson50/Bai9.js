//Viết chương trình JavaScript để kết hợp các số trong một mảng nhất định thành một mảng chứa tất cả các tổ hợp.
function b9(arr) {
  const result = [];
  const backtrack = (start, path) => {
    result.push(path);
    for (let i = start; i < arr.length; i++) {
      backtrack(i + 1, path.concat(arr[i]));
    }
  };
  backtrack(0, []);
  return result;
}
const arr = [1, 2, 3];
console.log(b9(arr));
