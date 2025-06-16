class BankAccounts {
  constructor(stk, name, balance) {
    this.stk = stk;
    this.name = name;
    this.balance = balance;
  }
  recharge(price) {
    this.balance += price;
  }
  withdraw(price) {
    this.balance -= price;
  }
  transfer(price, user) {
    if (price <= 0) {
      console.log("Số tiền chuyển phải lớn hơn 0");
      return;
    }
    if (price > this.balance) {
      console.log("Không đủ số dư để chuyển tiền");
      return;
    }
    this.balance -= price;
    user.balance += price;
    console.log(
      `Chuyển ${price}$ thành công từ ${this.name} sang ${user.name}`
    );
  }
  getBalance() {
    console.log(`Số tài khoản: ${this.stk}`);
    console.log(`Tên chủ tài khoản: ${this.name}`);
    console.log(`Số dư: ${this.balance}$`);
  }
}
let userA = new BankAccounts(123124, "Quang", 600);
let userB = new BankAccounts(123125, "Sáng", 700);
userA.recharge(500);
userA.withdraw(200);
userA.getBalance();
