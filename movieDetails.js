moviesList = [];
class Movie{
  constructor(title,studio,rating="PG") {  // Constructor
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    
    var movies = {};
        movies.title = this.title;
        movies.studio = this.studio;
        movies.rating = this.rating ;
        moviesList.push(movies);
  }
  getPG(movieName){
    let result =  moviesList.filter(ele => ( ele.title.toLowerCase() === movieName.toLowerCase() && ele.rating === "PG"));
    return result;
  }
}
let objInstOne = new Movie("Casino Royale","Eon Productions","PG­13");
let objInstTwo = new Movie("007","Eon Productions","PG");
console.log(objInstOne.getPG("Casino Royale"));
console.log(objInstTwo.getPG("007"));