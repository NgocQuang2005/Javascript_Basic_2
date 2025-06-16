//Viết một chương trình JavaScript sử dụng async/await để thực hiện ba tác vụ bất đồng bộ theo trình tự.
async function b7Timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function b7() {
  await b7Timeout(1000);
  console.log("việc 1");
  await b7Timeout(3000);
  console.log("việc 2");
  await b7Timeout(2000);
  console.log("việc 3");
}
