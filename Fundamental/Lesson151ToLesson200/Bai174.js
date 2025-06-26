//Viết chương trình JavaScript để chuyển đổi NodeList thành một mảng.
function bai174(nodeList) {
  return Array.from(nodeList);
}
console.log(bai174(document.childNodes));
