//Viết chương trình JavaScript trả về true nếu phần tử cha chứa phần tử con, nếu không thì trả về false.
function bai240(parent, child) {
  return parent !== child && parent.contains(child);
}
const parentElem = document.querySelector("head");
const childElem = document.querySelector("meta");
console.log(parentElem, childElem);
