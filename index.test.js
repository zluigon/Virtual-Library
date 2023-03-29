const { Media } = require('./classes/Media');
const { Book } = require('./classes/Book');
const { Movie } = require('./classes/Movie');
const { Music } = require('./classes/Music');

describe("Media Tests", () => {
    test("Can create instance of Media class", () => {
        const book = new Media('The Catcher in the Rye', 1951, 'Fiction');
        expect(book instanceof Media).toBe(true);
    })
    
    test("Media has properties of title, year, and genre", () => {
        const book = new Media('The Catcher in the Rye', 1951, 'Fiction');
        expect(book.title).toBe("The Catcher in the Rye");
        expect(book.year).toBe(1951);
        expect(book.genre).toBe("Fiction");
    })

    test("Media has summary method that returns the correct value", () => {
        const music = new Media('Abbey Road', 1969, 'Rock');
        expect(music.summary()).toBe("Title: Abbey Road, Year: 1969, Genre: Rock");
    })

    test("Media has static totalMedia count that increases with each Media instance", () => {
        const book = new Media('The Catcher in the Rye', 1951, 'Fiction');
        expect(Media.totalMediaCount).toBe(4);
        const music = new Media('Abbey Road', 1969, 'Rock');
        expect(Media.totalMediaCount).toBe(5);
    })
})

describe("Book Tests", () => {
    test("Can create a new Book instance that is child of Media", () => {
        const book1 = new Book('To Kill a Mockingbird', 1960, 'Fiction', 'Harper Lee', 281, 4.4);
        expect(book1 instanceof Book).toBe(true);
        expect(book1 instanceof Media).toBe(true);
    })
    
    test("Book has author, numPages, and rating property", () => {
        const book1 = new Book('To Kill a Mockingbird', 1960, 'Fiction', 'Harper Lee', 281, 4.4);
        expect(book1.author).toBe("Harper Lee");
        expect(book1.numPages).toBe(281);
        expect(book1.rating).toBe(4.4);
    })

    test("Book has summary method different from the Media summary method", () => {
        const book1 = new Book('To Kill a Mockingbird', 1960, 'Fiction', 'Harper Lee', 281, 4.4);
        expect(book1.summary()).toBe("Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960, Page Count: 281, Genre: Fiction, Rating: 4.4");
    })

    test("Book has static method highestRating that returns the highest rated book", () => {
        const book1 = new Book('To Kill a Mockingbird', 1960, 'Fiction', 'Harper Lee', 281, 4.4);
        const book2 = new Book('The Bluest Eye', 1970, 'Fiction', 'Toni Morrison', 206, 4.6);
        const book3 = new Book('My first novel', 2020, 'Fiction', 'Biblophile', 121, 2.2);
        expect(Book.highestRating([book1, book2, book3])).toEqual(book2);
    })

})

describe("Movie tests", () => {
    test("Can create a new Movie instance that is child of Media", () => {
        const movie1 = new Movie('Inception', 2010, 'Sci-Fi', 'Christopher Nolan', 148, 4.5);
        expect(movie1 instanceof Movie).toBe(true);
        expect(movie1 instanceof Media).toBe(true);
    })

    test("Movie instance has additional properties of director, duration, and rating", () => {
        const movie1 = new Movie('Inception', 2010, 'Sci-Fi', 'Christopher Nolan', 148, 4.5);
        expect(movie1.director).toBe('Christopher Nolan');
        expect(movie1.duration).toBe(148);
        expect(movie1.rating).toBe(4.5);
    })

    test("Movie has summary method that returns string different from Media summary method", () => {
        const movie1 = new Movie('Inception', 2010, 'Sci-Fi', 'Christopher Nolan', 148, 4.5);
        expect(movie1.summary()).toBe("Title: Inception, Director: Christopher Nolan, Year: 2010, Genre: Sci-Fi, Rating: 4.5");
    })

    test("Movie static longestMovie method that returns the movie with the highest rating", () => {
        const movie1 = new Movie('Inception', 2010, 'Sci-Fi', 'Christopher Nolan', 148, 4.5);
        const movie2 = new Movie('The Godfather', 1972, 'Crime', 'Francis Ford Coppola', 175, 4.7);
        expect(Movie.longestMovie([movie1, movie2])).toEqual(movie2);
    })
})

describe("Music tests", () => {
    test("Can create a new Book instance that is child of Media", () => {
        const music1 = new Music('Lemonade', 2016, 'R&B', 'Beyonce', 3949);
        expect(music1 instanceof Music).toBe(true);
        expect(music1 instanceof Media).toBe(true);
    })

    test("Music has properties of artist and length", () => {
        const music1 = new Music('Lemonade', 2016, 'R&B', 'Beyonce', 3949);
        expect(music1.artist).toBe("Beyonce");
        expect(music1.length).toBe(3949);
    })

    test("Music summary method returns the correct summary", () => {
        const music2 = new Music('Renaissance', 2022, 'R&B', 'Beyonce', 3734);
        expect(music2.summary()).toBe("Title: Renaissance, Artist: Beyonce, Year: 2022, Genre: R&B, Length: 3734 seconds");
    })

    test("Music has static shortestAlbum method that returns shortest album", () => {
        const music1 = new Music('Lemonade', 2016, 'R&B', 'Beyonce', 3949);
        const music2 = new Music('Renaissance', 2022, 'R&B', 'Beyonce', 3734);
        expect(Music.shortestAlbum([music1, music2])).toEqual(music2);
    })
})