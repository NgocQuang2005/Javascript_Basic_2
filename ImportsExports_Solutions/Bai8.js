//Viết chương trình JavaScript nhập một mô-đun cụ thể có điều kiện dựa trên giá trị thời gian chạy.
async function bai8(a, b, operation) {
  if (operation === "addition") {
    let { addition } = await import("./import_export/math.js");
    addition(a, b);
  } else if (operation === "subtraction") {
    let { subtraction } = await import("./import_export/math.js");
    subtraction(a, b);
  } else if (operation === "multiplication") {
    let { multiplication } = await import("./import_export/math.js");
    multiplication(a, b);
  } else if (operation === "division") {
    let { division } = await import("./import_export/math.js");
    division(a, b);
  } else {
    console.log("Không có phương thức đó");
  }
}
bai8(2, 3, "division");
