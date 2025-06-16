function b6Timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
b6Timeout(1000)
  .then(() => {
    console.log("việc 1");
    return b6Timeout(3000);
  })
  .then(() => {
    console.log("việc 2");
    return b6Timeout(2000);
  })
  .then(() => {
    console.log("việc 3");
  });
