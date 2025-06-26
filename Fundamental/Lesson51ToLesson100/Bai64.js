//Viết chương trình JavaScript để lấy đối số đầu tiên không phải null/không xác định.
function b64(...rag) {
  return rag.find((value) => value !== null && value !== undefined);
}
console.log(b64(null, undefined, 1, 2, 3));
