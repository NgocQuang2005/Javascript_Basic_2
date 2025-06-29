//Viết chương trình JavaScript để chuyển đổi một số theo byte thành một chuỗi mà con người có thể đọc được.
function bai163(bytes) {
  if (bytes === 0) return "0 Bytes";
  const units = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);
  return value.toFixed(2) + " " + units[i];
}
console.log(bai163(1024));
