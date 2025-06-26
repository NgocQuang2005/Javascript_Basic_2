//Viết chương trình JavaScript để kiểm tra xem số đã cho có nằm trong phạm vi cho trước hay không.
function bai217(num, start, end = null) {
  return num > start && num < end ? true : false;
}
console.log(bai217(3, 2, 5));
console.log(bai217(3, 4));
console.log(bai217(2, 3, 5));
console.log(bai217(3, 2));
