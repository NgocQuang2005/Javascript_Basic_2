const prmb51 = Promise.resolve([1, 2, 4, 1]);
const prmb52 = Promise.resolve(["abc", "def", "ghi"]);
const prmb53 = Promise.reject("Loi roi");
Promise.allSettled([prmb51, prmb52, prmb53]).then((result) => {
  console.log(result);
});
