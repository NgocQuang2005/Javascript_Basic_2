//Viết chương trình JavaScript để xóa các cặp khóa-giá trị tương ứng với các khóa đã cho khỏi một đối tượng.
function b39(obj, objDel) {
  for (let i = 0; i < objDel.length; i++) {
    if (objDel[i] in obj) {
      delete obj[objDel[i]];
    }
  }
  return obj;
}
console.log(b39({ a: 1, b: "2", c: 3 }, ["c"]));
