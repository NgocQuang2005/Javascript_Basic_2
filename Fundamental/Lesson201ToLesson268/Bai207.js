// /Viết chương trình JavaScript trả về true nếu chuỗi đã cho là URL tuyệt đối, trả về false nếu không.
function bai207(str) {
  return /^[a-z][a-z0-9+.-]*:/.test(str);
}
console.log(bai207("https://google.com"));
console.log(bai207("ftp://www.myserver.net"));
console.log(bai207("/foo/bar"));
