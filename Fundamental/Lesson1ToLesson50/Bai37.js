//Viết chương trình JavaScript để lấy một mảng các đối tượng được sắp xếp theo thuộc tính và thứ tự.
function b37(arr, props, orders = "asc") {
  if (!Array.isArray(arr) || !Array.isArray(props) || props.length === 0) {
    return arr;
  }
  return arr.sort((a, b) => {
    for (const prop of props) {
      if (a[prop] < b[prop]) {
        return orders === "asc" ? -1 : 1;
      }
      if (a[prop] > b[prop]) {
        return orders === "asc" ? 1 : -1;
      }
    }
    return 0;
  });
}
const users = [
  { name: "fred", age: 48 },
  { name: "barney", age: 36 },
  { name: "fred", age: 40 },
];
console.log(b37(users, ["name", "age"], "desc"));
console.log(b37(users, ["name", "age"]));
