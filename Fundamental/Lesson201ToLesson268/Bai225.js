//Viết chương trình JavaScript để lấy độ lệch chuẩn của một mảng số.
function bai225(arr) {
  const n = arr.length;
  if (n < 2) return 0;
  // Tính trung bình
  const tbinh = arr.reduce((sum, val) => sum + val, 0) / n;
  // Tính tổng bình phương độ lệch so với trung bình
  const bphuongdolech = arr.map((val) => (val - tbinh) ** 2);
  // Tính phương sai (chia cho n - 1)
  const psai = bphuongdolech.reduce((sum, val) => sum + val, 0) / (n - 1);
  // Căn bậc hai của phương sai là độ lệch chuẩn
  return Math.sqrt(psai);
}
const arr = [10, 2, 38, 23, 38, 23, 21];
console.log("Độ lệch chuẩn:", bai225(arr));
