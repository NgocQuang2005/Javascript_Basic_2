//Viết chương trình JavaScript để chuyển đổi một chuỗi thành chữ kebab
function bai120(str) {
  const kebab = str.replace(/\W+/g, "-").replace(/^-+|-+$/g, "");
  return kebab;
}
console.log(bai120("AllThe-small Things"));
