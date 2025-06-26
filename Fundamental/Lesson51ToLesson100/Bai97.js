function bai97(obj, check = Boolean) {
  return Object.keys(obj).reduce((acc, key) => {
    if (check(obj[key])) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
console.log(bai97({ a: 1, b: "2", c: 3 }, (x) => typeof x === "number"));
