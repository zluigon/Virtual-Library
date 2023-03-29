# Virtual Library 📚

You're building a virtual library app, and you need to create a set of classes to represent different types of media. You'll have books, movies, and music, each with their own unique properties. You'll need to create a base class for all media, and several subclasses for specific types of media. You'll also need to create a static method to keep track of the total number of media items in the library.

![Virtual Library Class Diagram](./assets/LibraryClassDiagram.png)

*Underlined items are static method. Italicized items are static properties*

## `Media` Class

1. In `Media.js`, create a `Media` class. The `Media` class should have the following properties and methods:
    - `title`: the title of the media (string)
    - `year`: the year the media was produced (number)
    - `genre`: the genre of the media (string)
    - `totalMediaCount`: A static property that tracks how many Media items have been created
    - `summary()`: a method that returns a summary of the media (string)
2. Export the `Media` class using `module.exports`.
3. In `index.js`, import `Media` using `require`.

## `Book` Class

1. In `Book.js`, create a `Book` class. The `Book` class should be a subclass of `Media`. Import `Media` into the `Book.js` file using `require`. 
2. `Book` should have the following properties and methods:
    - `author`: the author of the book (string)
    - `numPages`: the number of pages in the book (number)
    - `rating`: the average rating of the book (number between 1-5)
    - `summary()`: a method that returns a summary of the book, including the author, number of pages, and rating (string)
3. The `Book` class should have a static method `highestRating` that takes an array of `Book` items and returns the `Book` with the highest rating.
4. Export the `Book` class using `module.exports`.
5. In `index.js`, import `Book` using `require`.

## `Movie` Class

1. In `Movie.js`, create a `Movie` class. The `Movie` class should be a subclass of `Media`. Import `Media` into the `Movie.js` file using `require`. 
2. `Music` should have the following properties and methods:
    - `director`: the director of the movie (string)
    - `duration`: the duration of the movie in minutes (number)
    - `rating`: the average rating of the movie (number between 1-5)
    - `summary()`: a method that returns a summary of the movie, including the director, duration, and rating (string)
3. The `Movie` class should have a static method `longestMovie` that takes an array of `Movie` objects and returns the `Movie` with the longest duration.
4. Export the `Movie` class using `module.exports`.
5. In `index.js`, import `Movie` using `require`.

## Music Class
1. In `Music.js`, create a `Music` class. The `Music` class should be a subclass of `Media`. Import `Media` into the `Music.js` file using `require`. 
2. `Music` should have the following properties and methods:
    - `artist`: the artist of the music (string)
    - `album`: the album of the music (string)
    - `length`: the length of the music in seconds (number)
    - `summary()`: a method that returns a summary of the music, including the artist, album, and length (string)
3. The `Music` class should have a static method `shortestSong` that takes an array of `Music` objects and returns the `Music` object with the shortest song length.
4. Export the `Music` class using `module.exports`.
5. In `index.js`, import `Music` using `require`.

## Stretch: Enhance Your Library 🚀
1. Create a class of `Podcast` that is a subclass of `Music`. `Podcast` should inherit all of the properties and methods from the `Music` class and have an additional properties and methods of:
    - `host`: A string with the name of the host.
    - `episodeName`: A string with the name of the episode
    - `episodeNumber`: A number with the episode number.
    - `guests`: An array of the guests on the particular episode.
    - `listen()`: Methods that returns the string `<TITLE> - Episode: <EPISODE_TITLE>. Hosted by <HOST> and featuring guests <GUESTS>. Length: <LENGTH> seconds.`