function b11(arr) {
  let result = [];
  arr.sort((a, b) => {
    return b - a;
  });
  result.push(arr[arr.length - 2], arr[1]);
  return result;
}
console.log(b11([1, 2, 3, 4, 5, 9, 12, 8]));
