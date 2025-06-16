class Vehicle {
  constructor(manufacturer, vehicleType, yearManufacture) {
    this.manufacturer = manufacturer;
    this.vehicleType = vehicleType;
    this.yearManufacture = yearManufacture;
  }
  getInformation() {
    console.log(`Hãng xe: ${this.manufacturer}`);
    console.log(`Kiểu xe: ${this.vehicleType}`);
    console.log(`Năm sản xuất: ${this.yearManufacture}`);
  }
}
class Car extends Vehicle {
  constructor(manufacturer, vehicleType, yearManufacture, quantity) {
    super(manufacturer, vehicleType, yearManufacture);
    this.quantity = quantity;
  }
  getInformation() {
    super.getInformation();
    console.log(`Số lượng xe: ${this.quantity}`);
  }
}
let vehicle = new Vehicle("Ford", "F-150", 2020);
vehicle.getInformation();
console.log("==========================");
let vehicle1 = new Car("Ford", "F-150", 2020, 4);
vehicle1.getInformation();
console.log("==========================");
