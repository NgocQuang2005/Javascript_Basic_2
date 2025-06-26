//Viết chương trình JavaScript để tuần tự hóa cặp tên-giá trị cookie thành chuỗi tiêu đề Set-Cookie.
function bai147(name, value) {
  let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  return cookieStr;
}
console.log(bai147("name", "Quang"));
