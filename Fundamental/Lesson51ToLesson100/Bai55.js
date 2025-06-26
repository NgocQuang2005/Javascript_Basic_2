//Viết chương trình JavaScript để nối tất cả các phân đoạn URL đã cho lại với nhau, sau đó chuẩn hóa URL kết quả.
function b55(...segments) {
  return segments
    .join("/")
    .replace(/\/+/g, "/")
    .replace(/\/$/, "")
    .replace(/^\//, "")
    .replace(/\/\?/g, "?")
    .replace(/\/\&/g, "&");
}
console.log(b55("http://www.google.com", "a", "/b/cd", "?foo=123", "?bar=foo"));
