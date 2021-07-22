var movieID = localStorage.getItem("movieIDs");
var movieName = localStorage.getItem("movieNames");
document.getElementById("movieListOfNames").innerHTML = movieName;
document.getElementById("movieListOfNames").href = "fullmovie.html?movieid=" + movieID + " ";

function removeMovieData() {
  localStorage.removeItem("movieIDs");
  localStorage.removeItem("movieNames");
  location.reload();
  return false;
}
