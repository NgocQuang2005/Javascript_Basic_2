//Viết một chương trình JavaScript khởi tạo một mảng chứa các số trong phạm vi được chỉ định. Đây là nơi bắt đầu và kết thúc bao gồm và tỷ lệ giữa hai số hạng là bước. Trả về lỗi nếu bước bằng 1.
function bai222(end, start = 1, step = 2) {
  Array.from({
    length: Math.floor(Math.log(end / start) / Math.log(step)) + 1,
  }).map((v, i) => start * step ** i);
}
console.log(bai222(256));
console.log(bai222(256, 3));
console.log(bai222(256, 1, 4));
