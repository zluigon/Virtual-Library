// import the Media class:
const Media = require("./Media");
// create your Book class:
class Book extends Media {
  constructor(title, year, genre, author, numPages, rating) {
    super(title, year, genre);

    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }

  static highestRating(books) {
    return books.reduce((highestRatedBook, currentBook) =>
      currentBook.rating > highestRatedBook.rating
        ? currentBook
        : highestRatedBook
    );
  }

  static calculateAverageRating(books) {
    const totalRating = books.reduce((sum, book) => sum + book.rating, 0);
    return parseFloat((totalRating / books.length).toFixed(2));
  }
}
// don't change below
module.exports = Book;
