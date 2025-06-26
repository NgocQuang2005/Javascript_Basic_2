//Viết chương trình JavaScript để chuyển đổi chuỗi từ dạng camelcase.
const bai229 = (str, kitu = "_") =>
  str
    .replace(/([a-z\d])([A-Z])/g, "$1" + kitu + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + kitu + "$2")
    .toLowerCase();

console.log(bai229("someDatabaseFieldName", " "));
console.log(bai229("someLabelThatNeedsToBeCamelized", "-"));
console.log(bai229("someJavascriptProperty", "_"));
