//Viết chương trình JavaScript để lấy khóa cuối cùng thỏa mãn hàm kiểm tra được cung cấp, nếu không sẽ trả về undefined.
const bai235 = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .find((key) => fn(obj[key], key, obj));
console.log(
  bai235(
    {
      barney: { age: 36, active: true },
      fred: { age: 40, active: false },
      pebbles: { age: 1, active: true },
    },
    (o) => o["active"]
  )
);
