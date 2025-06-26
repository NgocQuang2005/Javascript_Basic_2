//Viết chương trình JavaScript để đo thời gian thực thi của một hàm.
function b28(callback) {
  return callback();
}
console.log(b28(() => Math.pow(2, 10)) + " ms");
