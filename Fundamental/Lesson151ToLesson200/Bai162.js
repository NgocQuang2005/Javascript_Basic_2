//Viết chương trình JavaScript để chuyển đổi một hàm bất đồng bộ thành một lời hứa.
function asyncFunction(arg, callback) {
  setTimeout(() => {
    if (arg < 0) {
      return callback(new Error("Giá trị không được âm!"));
    }
    callback(null, arg * 2);
  }, 1000);
}
function bai162(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}
const asyncFunctionPromise = bai162(asyncFunction);
asyncFunctionPromise(10)
  .then((res) => {
    console.log("Kết quả:", res);
  })
  .catch((err) => {
    console.error("Lỗi:", err.message);
  });

asyncFunctionPromise(-5)
  .then((res) => {
    console.log("Kết quả:", res);
  })
  .catch((err) => {
    console.error("Lỗi:", err.message);
  });
