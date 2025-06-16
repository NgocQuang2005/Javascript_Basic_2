//Viết chương trình JavaScript để tạo menu thả xuống có chức năng hiển thị và ẩn các tùy chọn khi nhấp vào.
let showMenu = document.getElementById("select-menub2");
let ulMenu = document.querySelector(".menub2");
showMenu.addEventListener("click", function () {
  ulMenu.classList.toggle("hide");
});
