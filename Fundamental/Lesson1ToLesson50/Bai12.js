//Viết chương trình JavaScript để xóa các ký tự ASCII không in được khỏi một chuỗi cho trước.
function b12(str) {
  return str.replace(/[^\x20-\x7E]/, "");
}
console.log(b12("äÄçÇéÉêw3resouröceÖÐþúÚ"));
