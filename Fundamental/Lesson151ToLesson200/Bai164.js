//Viết chương trình JavaScript trả về dạng số ít hoặc số nhiều của từ dựa trên số đầu vào.
function bai162(count, singular, plural = null) {
  const word = count === 1 ? singular : plural || singular + "s";
  return `${count} ${word}`;
}
console.log(bai162(1, "apple"));
console.log(bai162(2, "apple"));
console.log(bai162(0, "file"));
console.log(bai162(5, "person", "people"));
console.log(bai162(1, "person", "people"));
