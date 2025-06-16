//Viết hàm JavaScript bao bọc một hoạt động bất đồng bộ trong một Promise.
function setTime(value, time) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(value), time);
  });
}
setTime("Vãi chưởng", 2000)
  .then((data) => {
    console.log(data);
    return setTime("okok", 1000);
  })
  .then((data) => {
    console.log(data);
  });
