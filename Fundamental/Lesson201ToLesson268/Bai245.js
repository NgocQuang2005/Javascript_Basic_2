//Viết một chương trình JavaScript gọi hàm được cung cấp sau vài mili giây
function bai245(fn, wait, ...args) {
  setTimeout(fn, wait, ...args);
}
bai245(
  function (text) {
    console.log(text);
  },
  1000,
  "later"
);
