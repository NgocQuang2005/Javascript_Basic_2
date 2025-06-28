//Viết một chương trình JavaScript để lồng một mảng phẳng các đối tượng được liên kết với nhau theo cách đệ quy.
function bai90(items, id = null, link = "parent_id") {
  items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: bai90(items, item.id) }));
}
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 },
];
console.log(bai90(comments));
