//Viết chương trình JavaScript để lấy một tập hợp các thuộc tính được chỉ định bởi các bộ chọn đã cho từ một đối tượng.
function b49(obj, ...selectors) {
  if (
    !obj ||
    typeof obj !== "object" ||
    !Array.isArray(selectors) ||
    selectors.length === 0
  ) {
    return [];
  }
  let acc = [];
  selectors.map((item) => {
    let value = item.replace(/\[(\d+)\]/g, ".$1");
    const parts = value.split(".");
    let current = obj;
    for (let part of parts) {
      if (current === undefined || current === null) return undefined;
      current = current[part];
    }
    acc.push(current);
  });
  return acc;
}
const obj = {
  selector: { to: { val: "val to select" } },
  target: [1, 2, { a: "test" }],
};
console.log(b49(obj, "selector.to.val", "target[0]", "target[2].a"));
