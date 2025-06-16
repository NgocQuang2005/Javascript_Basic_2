//Viết chương trình JavaScript để chứng minh cách xử lý lỗi trong các hàm async/await bằng cách sử dụng try...catch.
async function b8() {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("message lỗi");
      }, 1000);
    });
  } catch (error) {
    console.log(error);
  }
}
