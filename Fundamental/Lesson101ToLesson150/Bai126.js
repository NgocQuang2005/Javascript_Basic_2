//Viết chương trình JavaScript để tạo định dạng tiền tệ cụ thể từ một số nhất định.
function formatCurrency(amount, locale = "vi-VN", currency = "VND") {
  if (typeof amount !== "number" || isNaN(amount)) {
    return "Bạn phải truyền vào số hợp lệ.";
  }
  return amount.toLocaleString(locale, {
    style: "currency",
    currency: currency,
  });
}

console.log(formatCurrency(1000000));
console.log(formatCurrency(1234567.89));
console.log(formatCurrency(5000, "en-US", "USD"));
console.log(formatCurrency(5000, "ja-JP", "JPY"));
