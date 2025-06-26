//Viết chương trình JavaScript để tạo một đối tượng từ đối tượng được chỉ định, trong đó tất cả các khóa đều được viết thường.
function bai178(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    let lower = key.toLowerCase();
    acc[lower] = obj[key];
    return acc;
  }, {});
}
const myObj = { Name: "Adam", sUrnAME: "Smith" };
const myObjLower = bai178(myObj);
console.log(myObjLower);
