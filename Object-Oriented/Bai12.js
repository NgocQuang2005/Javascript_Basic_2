class University {
  constructor(universityName, universityDepartment) {
    this.universityName = universityName;
    this.universityDepartment = [];
  }
  addDepartment(department) {
    this.universityDepartment.push(department);
    console.log(
      `Thêm thành công Khoa ${department} vào Đại Học ${this.universityName}`
    );
  }
  deleteDepartment(department) {
    let index = this.universityDepartment.indexOf(department);
    if (index !== -1) {
      this.universityDepartment.splice(index, 1);
    } else {
      console.log(
        `Không có khoa này trong trường Đại Học ${this.universityName}`
      );
    }
    console.log(
      `Xóa thành công Khoa ${department} ở trường Đại Học ${this.universityName}`
    );
  }
  getAllDepartment() {
    this.universityDepartment.map((value, index) =>
      console.log(`${index + 1}: ${value}`)
    );
  }
}
let universityA = new University("Đại học sư phạm Hồ Chí Minh");
universityA.addDepartment("Địa Sử");
universityA.addDepartment("Toán");
universityA.addDepartment("Văn");
universityA.deleteDepartment("Địa Sử");
universityA.getAllDepartment();
