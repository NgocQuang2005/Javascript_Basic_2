const prmb41 = Promise.resolve({
  name: "Nguyen Van A",
  age: 20,
});
const prmb42 = Promise.resolve(2);
Promise.any([prmb41, prmb42])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
