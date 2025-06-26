//
function bai257(arr, delimiter = ",") {
  return arr.map((v) => v.map((x) => `"${x}"`).join(delimiter)).join("\n");
}
console.log(
  bai257([
    ["a", "b"],
    ["c", "d"],
  ])
);
console.log(
  bai257(
    [
      ["a", "b"],
      ["c", "d"],
    ],
    ";"
  )
);
