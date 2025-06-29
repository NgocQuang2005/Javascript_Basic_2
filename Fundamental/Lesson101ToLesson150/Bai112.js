//Viết chương trình JavaScript để làm phẳng một đối tượng bằng các đường dẫn cho khóa.
let a = "a.b.c";
console.log(a.includes("."));
function bai112(obj) {
  const result = {};
  for (let key in obj) {
    const parts = key.split(".");
    let current = result;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (i === parts.length - 1) {
        current[part] = obj[key];
      } else {
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
    }
  }
  return result;
}
console.log(bai112({ "a.b.c": 1, d: 1 }));
