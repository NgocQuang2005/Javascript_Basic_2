//Viết chương trình JavaScript để tạo một hàm chấp nhận tối đa một đối số, bỏ qua mọi đối số bổ sung.
function bai115(fn) {
  return (val) => fn(val);
}
console.log(["6", "8", "10"].map(bai115(parseInt)));
