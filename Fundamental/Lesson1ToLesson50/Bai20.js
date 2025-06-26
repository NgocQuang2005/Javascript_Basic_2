//Viết chương trình JavaScript để mở rộng mã màu 3 chữ số thành mã màu 6 chữ số.
function b20(shortHex) {
  if (shortHex.split("").includes("#")) {
    let oa = shortHex[0];
    let ob = shortHex.slice(1).split("");
    let oc = ob.map((value) => value + value).join("");
    return oa + oc;
  } else {
    let oa = "#";
    let ob = shortHex.split("");
    let oc = ob.map((value) => value + value).join("");
    return oa + oc;
  }
}
console.log(b20("#03f"));
