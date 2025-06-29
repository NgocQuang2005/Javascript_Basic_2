//Viết một hàm JavaScript đảm bảo chỉ có một số lượng yêu cầu không đồng bộ được chỉ định được thực hiện đồng thời.
const callApi = (value, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Request ${value} in ${delay}ms`);
      resolve();
    }, delay);
  });
};
const requests = [
  () => callApi(1, 1000),
  () => callApi(2, 500),
  () => callApi(3, 1500),
  () => callApi(4, 100),
  () => callApi(5, 2000),
];
