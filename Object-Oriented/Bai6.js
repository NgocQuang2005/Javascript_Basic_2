class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  calculateAnnualSalary() {
    return this.salary * 12;
  }
}
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  annualSalary() {
    const baseSalary = super.calculateAnnualSalary();
    const bonus = 0.15;
    console.log(`Bonus (15% of the base salary): ${bonus}`);
    return bonus * baseSalary + baseSalary;
  }
}
let e = new Employee("Nguyễn Ngọc Quang", 500);
console.log(`Lương: ${e.calculateAnnualSalary()}$ 1 năm`);
