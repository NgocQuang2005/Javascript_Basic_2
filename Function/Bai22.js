//Viết một hàm JavaScript chấp nhận hai đối số, một chuỗi và một chữ cái và hàm sẽ đếm số lần xuất hiện của chữ cái được chỉ định trong chuỗi.
function b22(str, ck) {
  let strSplit = str.split("");
  let result = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === ck) {
      result++;
    }
  }
  return result;
}
console.log(b22("w3resource.com", "o"));
