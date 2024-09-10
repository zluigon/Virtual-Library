// import the Media class:
const Media = require("./Media");
// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }

  static longestMovie(movies) {
    return movies.reduce((longestMovieDuration, currMovie) =>
      currMovie.duration > longestMovieDuration.duration
        ? currMovie
        : longestMovieDuration
    );
  }

  static calculateAverageRating(movies){
    const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
    return parseFloat((totalRating / movies.length).toFixed(2));
  }
}
// don't change below
module.exports = Movie;
