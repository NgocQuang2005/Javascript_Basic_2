//Viết chương trình JavaScript để lấy khóa đầu tiên thỏa mãn hàm kiểm tra được cung cấp. Nếu không thì trả về undefined.
const bai236 = (obj, fn) =>
  Object.keys(obj).find((key) => fn(obj[key], key, obj));
console.log(
  bai236(
    {
      barney: { age: 36, active: true },
      fred: { age: 40, active: false },
      pebbles: { age: 1, active: true },
    },
    (o) => o["active"]
  )
);
