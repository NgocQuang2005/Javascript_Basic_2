//Viết chương trình JavaScript để minh họa cách bắt và xử lý lỗi trong Promise bằng cách sử dụng .catch().
function b3() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject("message lỗi");
    }, 1000);
  });
}
b3()
  .then((result) => {
    console.log(`Ket qua ${result}`);
    return b3();
  })
  .catch((mes) => {
    console.log(mes);
  });
