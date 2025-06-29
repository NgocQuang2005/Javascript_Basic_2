//Viết chương trình JavaScript để nhóm các phần tử thành hai mảng, tùy thuộc vào độ chính xác của hàm được cung cấp cho từng phần tử.
const bai168 = (arr, fn) =>
  arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
const users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: true },
];
console.log(bai168(users, (o) => o.active));
