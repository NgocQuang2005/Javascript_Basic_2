function bai88(arr) {
  if (arr.length === 0 || arr.length === 1 || arr.length % 2 === 0) return arr;
  let rt = arr.sort((a, b) => a - b);
  let mid = Math.floor(arr.length / 2);
  return rt[mid];
}
console.log(bai88([5, 6, 50, 1, -5]));
console.log(bai88([5, 6, 50, 1, -5, 10]));
console.log(bai88([5, 6, 50, 1, -5, 10, 100]));
