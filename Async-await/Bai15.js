//Viết chương trình JavaScript minh họa cách sử dụng Promise.race để trả về Promise hoàn thành đầu tiên.
let a = Promise.resolve("Ok nhá");
let c = new Promise((resolve) => {
  setTimeout(() => resolve("ựaaa"), 2000);
});
Promise.race([c, a]).then((data) => console.log(data));
