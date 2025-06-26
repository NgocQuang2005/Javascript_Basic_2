//Viết chương trình JavaScript để chạy một mảng các lời hứa theo trình tự.
let a = Promise.resolve("Ngọc Quang");
let b = new Promise((resolve) => {
  setTimeout(() => resolve(2), 2000);
});
let c = new Promise((resolve) => {
  setTimeout(() => resolve(15), 1000);
});
let promises = [a, b, c];
promises.reduce((prev, curr) => {
  return prev
    .then(() => curr)
    .then((result) => {
      console.log(result);
    });
}, Promise.resolve());
