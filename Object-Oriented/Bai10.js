class Product {
  constructor(id, productName, price) {
    this.id = id;
    this.productName = productName;
    this.price = price;
  }
  totalPrice(quantity) {
    console.log(`Tổng tiền: ${quantity * this.price}$`);
  }
}
class PersonalCareProduct extends Product {
  constructor(id, productName, price, warrantyPeriod) {
    super(id, productName, price);
    this.warrantyPeriod = warrantyPeriod;
  }
  totalPrice(quantity) {
    super.totalPrice(quantity);
    console.log(`Thời hạn bảo hành: ${this.warrantyPeriod}`);
  }
}
console.log("==========================");
let prd = new PersonalCareProduct(1, "Laptop Asus", 1000, "22-7-2025");
prd.totalPrice(2);
