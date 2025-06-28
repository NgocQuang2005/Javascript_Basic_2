//Viết chương trình JavaScript trả về true nếu phần dưới cùng của trang hiển thị, nếu không thì trả về false.
function bai261() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}
window.addEventListener("scroll", () => {
  if (bai261()) {
    console.log(" Đã cuộn đến cuối trang!");
  }
});
