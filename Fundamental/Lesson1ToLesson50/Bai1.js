//Viết chương trình JavaScript để so sánh hai đối tượng nhằm xác định xem đối tượng đầu tiên có chứa các giá trị thuộc tính tương đương với đối tượng thứ hai hay không.
function b1(obj1, obj2) {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  for (let i = 0; i < key2.length; i++) {
    if (!key1.includes(key2[i])) {
      return false;
    }
  }
  return true;
}
console.log(
  b1({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true })
);
