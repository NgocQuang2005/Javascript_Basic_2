//Viết chương trình JavaScript trả về true nếu chuỗi là y/yes hoặc false nếu chuỗi là n/no.
function b26(str, def = false) {
  if (typeof str !== "string") {
    return def;
  }
  str = str.trim().toLowerCase();
  if (def === true) {
    return true;
  }
  if (str === "y" || str === "yes") {
    return true;
  }
  if (str === "n" || str === "no") {
    return false;
  }
  return def;
}
console.log(b26("Foo", true)); //true
console.log(b26("yes")); //true
console.log(b26("n")); //false
