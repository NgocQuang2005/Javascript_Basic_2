const listItems = document.querySelectorAll("#listb6 li");
let draggedItem = null;
listItems.forEach((item) => {
  // Khi bắt đầu kéo
  item.addEventListener("dragstart", (e) => {
    draggedItem = item; // gán item đang kéo
    e.dataTransfer.effectAllowed = "move"; // Hiển thị icon kéo
  });
  // Cho phép thả vào mục khác
  item.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  // Khi mục kéo vào vùng khác
  item.addEventListener("dragenter", (e) => {
    e.preventDefault();
    item.style.backgroundColor = "#eee"; // làm mờ item khi kéo
  });
  item.addEventListener("dragleave", () => {
    item.style.backgroundColor = "";
  });
  // Khi thả vào mục khác
  item.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggedItem !== item) {
      const draggedHTML = draggedItem.innerHTML;
      draggedItem.innerHTML = item.innerHTML;
      item.innerHTML = draggedHTML;
    }
    item.style.backgroundColor = "";
  });
});
