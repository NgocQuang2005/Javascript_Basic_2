//Viết hàm JavaScript để chuyển đổi một số tiền thành tiền xu.
function b14(amount, coins) {
  let result = [];
  for (let i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      amount -= coins[i];
      result.push(coins[i]);
    }
  }
  return result;
}
console.log(b14(46, [25, 10, 5, 2, 1]));
