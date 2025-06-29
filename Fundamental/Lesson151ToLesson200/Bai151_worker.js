self.onmessage = function (event) {
  const max = event.data;
  let count = 0;
  // Vòng lặp mô phỏng tác vụ nặng
  for (let i = 0; i < max; i++) {
    count += i;
  }
  // Gửi kết quả về main thread
  self.postMessage(count);
};
