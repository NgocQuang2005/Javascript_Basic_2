//Viết chương trình JavaScript để làm phẳng một đối tượng bằng các đường dẫn dành cho khóa.
const bai233 = (obj, prefix = "") =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + "." : "";
    if (typeof obj[k] === "object") Object.assign(acc, bai233(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});
console.log(bai233({ a: { b: { c: 1 } }, d: 1 }));
