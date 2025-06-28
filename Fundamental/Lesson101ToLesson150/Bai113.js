//Viết chương trình JavaScript để bỏ ký tự thoát khỏi HTML.
function bai113(str) {
  return str.replace(
    /&|<|>|'|"/g,
    (tag) =>
      ({
        "&": "&",
        "<": "<",
        ">": ">",
        "'": "'",
        '"': '"',
      }[tag] || tag)
  );
}
console.log(bai113('<a href="#">Me & you</a>'));
