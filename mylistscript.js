var movieID = localStorage.getItem("movieIDs");
var movieName = localStorage.getItem("movieNames");
document.getElementById("movieListOfNames").innerHTML = "- " + movieName;
document.getElementById("movieListOfNames").href = "fullmovie.html?movieid=" + movieID + " ";

function removeMovieData() {
  localStorage.removeItem("movieIDs");
  localStorage.removeItem("movieNames");
  location.reload();
  return false;
}

if(localStorage.getItem("movieIDs") == null)
{
  document.getElementById("state").innerHTML = "Add a movie to your list by pressing the '+ My List' button on the move details or home page to display it here."
}

if(localStorage.getItem("movieIDs") != null) 
{
  document.getElementById("state").innerHTML = "Press on the movie name to get redirected to its details page."
}

if(document.getElementById("movieListOfNames").innerHTML == "- null")
{
  document.getElementById("movieListOfNames").style.display = "none";
} else 
{
  document.getElementById("movieListOfNames").style.display = "inline-block";
}