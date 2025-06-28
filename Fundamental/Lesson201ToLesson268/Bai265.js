//Viết chương trình JavaScript để chia một mảng thành các mảng nhỏ hơn có kích thước xác định.
function bai265(arr, length) {
  return Array.from({ length: Math.ceil(arr.length / length) }, (v, idx) => {
    return arr.slice(idx * length, idx * length + length);
  });
}
console.log(bai265([1, 2, 3, 4, 5], 2));
