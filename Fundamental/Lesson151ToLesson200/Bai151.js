//Viết một chương trình JavaScript để chạy một hàm trong một luồng riêng biệt bằng cách sử dụng Web Worker. Điều này cho phép các hàm chạy lâu không chặn UI.
const worker = new Worker("Bai151_worker.js");

worker.onmessage = function (event) {
  document.getElementById("status").innerText = "Kết quả: " + event.data;
};
function bai151() {
  document.getElementById("status").innerText = "Đang xử lý...";
  // Gửi số lượng vòng lặp lớn vào worker
  worker.postMessage(500000000); // 500 triệu vòng lặp
}
