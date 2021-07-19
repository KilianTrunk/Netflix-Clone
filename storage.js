var API_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2';

async function saveFeaturedMovieName() {
  const response = await fetch(API_URL);
  const json = await response.json();

  var featuredMovieName = json.results[0].original_title;
  localStorage.setItem("featuredMovieName", featuredMovieName);

  document.getElementById("movieListElement1").innerHTML = localStorage.getItem("MovieName");
}

async function saveMovieName() {
  const response = await fetch(API_URL);
  const json = await response.json();


  var movieName = json.original_title;

  const movieNameStorage = [movieName];
  localStorage.setItem("movieNames", movieNameStorage);

  document.getElementById("movieListElement2").innerHTML = localStorage.getItem("MovieName");
}

async function showMovieNames() {
  document.getElementById("movieListElement1").innerHTML = localStorage.getItem("featuredMovieName");
  document.getElementById("movieListElement2").innerHTML = localStorage.getItem("movieNames");

  if (document.getElementById("movieListElement1").innerHTML === document.getElementById("movieListElement2").innerHTML)
  {
    document.getElementById("movieListElement2").style.display="none";
  }
}
