const data = [
  {
    id: 1,
    name: "john",
    age: 24,
  },
  {
    id: 2,
    name: "mike",
    age: 50,
  },
];

function bai98(data, key, check) {
  return data
    .filter((item) => check(item))
    .map((item) => {
      const newItem = {};
      key.forEach((k) => {
        newItem[k] = item[k];
      });
      return newItem;
    });
}
console.log(bai98(data, ["id", "name"], (item) => item.age > 30)); // [{ id: 2, name: 'mike' }]
