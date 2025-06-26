//Viết một chương trình JavaScript để xác định xem môi trường chạy hiện tại có phải là trình duyệt hay không. Điều này là để các mô-đun front-end có thể chạy trên máy chủ (Node) mà không có lỗi.
function bai203() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
