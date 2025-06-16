//Viết chương trình JavaScript kết hợp các tác vụ đồng bộ và không đồng bộ bằng cách sử dụng Promise.all.
let a = Promise.resolve("Ok rồi đấy");
let b = new Promise((resolve) => {
  setTimeout(() => resolve(2007), 2000);
});

Promise.all([a, b]).then((data) => {
  console.log(data);
});
