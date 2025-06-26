//Viết chương trình JavaScript để đếm giá trị trong một mảng.
function b70(arr, value) {
  return arr.reduce((acc, curr) => {
    if (curr === value) {
      acc++;
    }
    return acc;
  }, 0);
}
console.log(b70([1, 2, 3, 4, 5, 1, 2, 1], 1));
console.log(b70(["apple", "banana", "apple", "orange"], "apple"));
