//Viết hàm JavaScript để giải quyết cấu trúc Promise lồng nhau bằng cách sử dụng async/await.
function b16() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(() => {
        return new Promise((resolve) => {
          setTimeout(() => resolve("promise lồng"), 2000);
        });
      });
    }, 2000);
  });
}
async function ok() {
  let b = await b16();
  let result = await b();
  console.log(result);
}
ok().then(() => console.log("okok"));
