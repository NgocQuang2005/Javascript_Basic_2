class Bank {
  constructor() {
    this.branchBank = [];
  }
  createBranch(branch) {
    this.branchBank.push(branch);
  }
  deleteBranch(branch) {
    let index = this.branchBank.indexOf(branch);
    if (index !== -1) {
      this.branchBank.splice(index, 1);
    } else {
      console.log("không có chi nhánh này");
    }
  }
  getBranch() {
    if (this.branchBank.length === 0) {
      console.log("Chưa có chi nhánh nào");
    } else {
      this.branchBank.map((value) => console.log(value));
    }
  }
}
const nganhang = new Bank();
nganhang.createBranch("Branch A");
nganhang.createBranch("Branch b");
nganhang.getBranch();
nganhang.deleteBranch("Branch b");
nganhang.getBranch();
