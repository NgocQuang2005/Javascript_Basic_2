//Viết một chương trình JavaScript để đảo ngược các cặp khóa-giá trị của một đối tượng, mà không làm thay đổi nó. Giá trị đảo ngược tương ứng của mỗi khóa đảo ngược là một mảng các khóa chịu trách nhiệm tạo ra giá trị đảo ngược. Nếu một hàm được cung cấp, nó sẽ được áp dụng cho mỗi khóa đảo ngược.
function bai78(obj, fn) {
  return Object.keys(obj).reduce((acc, key) => {
    const val = fn ? fn(obj[key]) : obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});
}
console.log(bai78({ a: 1, b: 2, c: 1 }, (value) => value));
