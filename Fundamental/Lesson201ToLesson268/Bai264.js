//Viết hoa chữ cái đầu tiên của từ
function bai264(str) {
  return str
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
}
console.log(bai264("nguyễn ngọc quang"));
