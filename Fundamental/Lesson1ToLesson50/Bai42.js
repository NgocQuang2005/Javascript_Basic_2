//Viết chương trình JavaScript để có được hàm hợp nhất tùy chỉnh trả về đối số đầu tiên trả về giá trị true từ hàm xác thực đối số được cung cấp;
function b42(...value) {
  for (let i = 0; i < value.length; i++) {
    if (Boolean(value[i])) {
      return value[i];
    }
  }
}
console.log(b42(undefined, null, NaN, "", "Waldo"));
