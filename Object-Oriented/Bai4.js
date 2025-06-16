class BankAccount {
  constructor(stk, price) {
    this.stk = stk;
    this.price = price;
  }
  recharge(amount) {
    if (amount > 0) {
      this.price += amount;
      console.log(`Nạp ${amount} thành công. Số dư mới: ${this.price}`);
    } else {
      console.log("Số tiền nạp phải lớn hơn 0");
    }
  }
  withdrawMonney(amount) {
    if (amount > 0) {
      this.price -= amount;
      console.log(`Rút ${amount} thành công. Số dư mới: ${this.price}`);
    } else {
      console.log("Số tiền rút phải lớn hơn 0");
    }
  }
  getPrice() {
    return this.price;
  }
}
const myAccount = new BankAccount("12345678", 1000);
myAccount.recharge(500);
myAccount.withdrawMonney(300);
console.log(myAccount.getPrice());
