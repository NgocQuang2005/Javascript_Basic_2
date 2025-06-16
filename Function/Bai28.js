//Viết chương trình JavaScript để truyền 'hàm JavaScript' làm tham số.
function JavaScript() {
  console.log("I Love JavaScript");
}
function b28(callback) {
  callback();
}
b28(JavaScript);
