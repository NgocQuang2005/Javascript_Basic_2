//Viết chương trình JavaScript để thêm các ký tự đặc biệt vào văn bản để in màu trên bảng điều khiển (kết hợp với console.log()).
function b65(text, color = "red") {
  const colors = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    reset: "\x1b[0m",
  };

  return `${colors[color] || colors.red}${text}${colors.reset}`;
}
console.log(b65("Hello, World!", "green"));
