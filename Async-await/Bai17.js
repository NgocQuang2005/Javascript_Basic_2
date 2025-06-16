//Viết chương trình JavaScript hiển thị thông báo "đang tải" trong khi chờ thao tác bất đồng bộ hoàn tất.
function b17() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("đã có dữ liệu"), 3000);
  });
}
async function run() {
  console.log("đang tải");
  let data = await b17();
  console.clear();
  console.log(data);
}
run();
