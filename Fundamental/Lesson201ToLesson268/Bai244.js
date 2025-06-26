//Viết chương trình JavaScript để tính sự khác biệt giữa hai mảng cho trước.
function bai244(arr1, arr2) {
  return arr1.reduce((acc, item) => {
    if (!arr2.includes(item)) acc.push(item);
    return acc;
  }, []);
}
console.log(bai244([1, 2, 3], [1, 2, 4]));
console.log(bai244([1, 2, 4], [1, 2, 3]));
