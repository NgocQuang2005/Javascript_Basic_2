//Viết một chương trình JavaScript trả về true nếu một đối tượng trông giống như Promise, trả về false nếu không.
function bai189(obj) {
  return (
    obj !== null &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}
console.log(
  bai189({
    then: function () {
      return "";
    },
  })
);
