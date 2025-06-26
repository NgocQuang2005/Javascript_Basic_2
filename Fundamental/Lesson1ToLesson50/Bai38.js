//Viết chương trình JavaScript để thêm ký tự được chỉ định vào cả hai bên của chuỗi nếu chuỗi đó ngắn hơn độ dài được chỉ định.
function b38(str, char, len) {
  if (str.length >= len) {
    return str;
  }
  const padding = char.repeat(Math.ceil((len - str.length) / 2));
  return padding + str + padding;
}
