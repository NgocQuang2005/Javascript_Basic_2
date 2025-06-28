//Viết chương trình JavaScript để đánh giá hệ số nhị thức của hai số nguyên n và k.
function bai260(n, k) {
  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  if (k === 1 || k === n - 1) return n;
  if (n - k < k) k = n - k;
  let res = n;
  for (let i = 2; i <= k; i++) {
    res *= (n - i + 1) / i;
  }
  return Math.round(res);
}
console.log(bai260(6, 2));
