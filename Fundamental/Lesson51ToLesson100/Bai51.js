//Viết chương trình JavaScript để lấy đối tượng chứa các tham số URL hiện tại.
function b51(url) {
  const params = new URLSearchParams(url.split("?")[1]);
  console.log(params.entries());
  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
}
console.log(b51("https://example.com/page?name=John&age=30"));
