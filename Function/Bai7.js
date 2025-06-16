//
function b7(str) {
  let strSplit = str.split("");
  let result = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if (
      strSplit[i] === "a" ||
      strSplit[i] === "e" ||
      strSplit[i] === "i" ||
      strSplit[i] === "o" ||
      strSplit[i] === "u"
    ) {
      result++;
    }
  }
  return result;
}
console.log(b7("The quick brown fox jumps over the lazy dog"));
