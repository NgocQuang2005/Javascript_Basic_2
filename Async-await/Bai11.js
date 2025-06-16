//Viết hàm JavaScript tạo một Promise có hiệu lực sau một số mili giây nhất định.
function setTime(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}
setTime(2000)
  .then(() => {
    console.log("hohohoh");
    return setTime(1000);
  })
  .then(() => {
    console.log("àasfa");
  });
