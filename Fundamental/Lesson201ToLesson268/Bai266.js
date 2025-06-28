//Viết chương trình JavaScript để kẹp một số trong phạm vi bao gồm được chỉ định bởi các giá trị biên a và b đã cho.
function bai266(x, a, b) {
  if (x < a) {
    console.log(a);
  } else if (x > b) {
    console.log(b);
  } else {
    console.log(x);
  }
}
bai266(25, 10, 20);
