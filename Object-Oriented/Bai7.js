class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  BookDetails() {
    console.log(`Sách: ${this.title}`);
    console.log(`Tác giả: ${this.author}`);
    console.log(`Năm xuất bản: ${this.year}`);
  }
}
class Ebook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);
    this.price = price;
  }
  EbookDetails() {
    super.BookDetails();
    console.log(`Số tiền: ${this.price}`);
  }
}
let b = new Book("Kẻ Thị Phi", "Ngọc Quang", 2025);
b.BookDetails();
