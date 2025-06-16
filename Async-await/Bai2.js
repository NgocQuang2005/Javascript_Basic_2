//Viết một hàm JavaScript sử dụng chuỗi lệnh gọi .then() để thực hiện một loạt các tác vụ không đồng bộ.
function b2(name, time) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(name);
    }, time);
  });
}
b2("Quang", 2000)
  .then((result) => {
    console.log(result);
    return b2("Tmaii", 1500);
  })
  .then((result) => {
    console.log(result);
  });
