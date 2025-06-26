//Viết chương trình JavaScript để kiểm tra xem đối số được cung cấp có phải là JSON hợp lệ hay không.
function bai183(obj) {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
}
console.log(bai183('{"name":"Adam","age":20}'));
console.log(bai183('{"name":"Adam",age:"20"}'));
console.log(bai183(null));
