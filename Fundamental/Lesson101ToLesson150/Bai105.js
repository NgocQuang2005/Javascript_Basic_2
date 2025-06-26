//Viết chương trình JavaScript trả về true nếu giá trị cho là số, nếu không thì trả về false.
function bai105(value) {
  let cvVl = Number(value);
  if (typeof value === "number" || (typeof cvVl === "number" && !isNaN(cvVl))) {
    return true;
  }
  return false;
}
console.log(bai105("a"));
