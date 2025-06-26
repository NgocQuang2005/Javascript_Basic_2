//Viết chương trình JavaScript để tạo một phần tử từ một chuỗi (không thêm nó vào tài liệu).
function bai250(htmlString) {
  const template = document.createElement("template");
  template.innerHTML = htmlString.trim();
  return template.content.firstChild;
}
const newElement = bai250('<div class="box">Xin chào!</div>');
console.log(newElement);
console.log(newElement.tagName);
