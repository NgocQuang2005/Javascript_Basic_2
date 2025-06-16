//Viết chương trình JavaScript để tạo trình chiếu có chức năng thay đổi hình ảnh hiển thị khi nhấp vào nút tiếp theo hoặc nút trước đó.
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const sliderMain = document.querySelector(".slider-main");
const sliderItems = document.querySelectorAll(".slider-item");
const sliderLength = sliderItems.length;
const sliderWidth = sliderItems[0].offsetWidth;
let index = 0; // vị trí bắt đầu
let positionX = 0; //độ dài đầu tiên
function slideb5(n) {
  if (n === 1) {
    if (index >= sliderLength - 1) {
      index = sliderLength - 1;
      return;
    }
    positionX -= sliderWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;
    index++;
  } else if (n === 2) {
    if (index <= 0) {
      index = 0;
      return;
    }
    positionX += sliderWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;
    index--;
  }
}
prev.addEventListener("click", function () {
  slideb5(2);
});
next.addEventListener("click", function () {
  slideb5(1);
});
