//Viết chương trình JavaScript để lấy danh sách các phần tử tồn tại trong cả hai mảng.
function bai211(arr1, arr2) {
  return arr1.reduce((acc, item) => {
    if (arr2.includes(item)) acc.push(item);
    return acc;
  }, []);
}

let arra = [1, "b", 3, 4, 6];
let arrb = [1, 2, "b", 4, 5];
console.log(bai211(arra, arrb));
