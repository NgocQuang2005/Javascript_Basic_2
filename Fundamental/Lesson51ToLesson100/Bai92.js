//Viết chương trình JavaScript để tạo hàm lấy đối số ở chỉ mục n. Nếu n âm, đối số thứ n tính từ cuối sẽ được trả về.
function bai92(n) {
  return (...args) => {
    if (n < 0) {
      return args[args.length + n];
    }
    return args[n];
  };
}
console.log(bai92(2)(1, 2, 3, 4, 5));
