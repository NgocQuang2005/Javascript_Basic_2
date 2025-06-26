function bai96(obj, arrkey) {
  return arrkey.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
console.log(bai96({ a: 1, b: "2", c: 3 }, ["a", "c"])); // Output: { a: 1, c: 3 }
