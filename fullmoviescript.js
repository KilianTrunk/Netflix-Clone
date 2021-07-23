var API_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2';
var currentPageUrl = new URL(window.location.href);
document.getElementById("myListButton2").style.display = "none";

async function getMovieData() {

  const response = await fetch(API_URL);
  const json = await response.json();

  let params = currentPageUrl.searchParams;
  var movieID = params.get('movieid');

  const movieTitle = document.querySelector('#movieTitle');
  const movieOverview = document.querySelector('#movieOverview');
  const movieReleaseDate = document.querySelector('#movieReleaseDate');
  const movieLanguage = document.querySelector('#movieLanguage');
  const movieTagline = document.querySelector('#movieTagline');
  const movieHomepage = document.querySelector('#movieHomepage');

  var data = {};

  if (typeof movieID == 'undefined') {
    API_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2';
    const response = await fetch(API_URL);
    const json = await response.json();
    data = json.results[0];
    console.log(data);

  } else {
    API_URL = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=b0d1306fad90411efb79cc7bced5c6f2';
    const response = await fetch(API_URL);
    const json = await response.json();
    data = json;
    console.log(json);
  }

  movieTitle.innerHTML = data.original_title;
  movieOverview.innerHTML = data.overview;
  movieReleaseDate.innerHTML = data.release_date;
  movieLanguage.innerHTML = data.original_language;
  movieTagline.innerHTML = data.tagline;
  movieHomepage.innerHTML = data.homepage;

  document.getElementById("details").style.backgroundImage = "url('https://image.tmdb.org/t/p/original/" + data.backdrop_path + "')";
  document.getElementById("myListButton").dataset.movieTitle = data.original_title;
}

getMovieData();

async function saveMovieID() {
  let params = currentPageUrl.searchParams;
  var movieID = params.get('movieid');
  API_URL = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=b0d1306fad90411efb79cc7bced5c6f2';
  const response = await fetch(API_URL);
  const json = await response.json();
  var movieID = json.id;
  var movieName = json.original_title;
  console.log(movieName);

  var checkKey = localStorage.getItem("movieIDs");
  console.log(checkKey);

  var checkName = localStorage.getItem("movieNames");

  if(checkKey == null && checkName == null)
  {
    localStorage.setItem("movieIDs", JSON.stringify(movieID));
    localStorage.setItem("movieNames", JSON.stringify(movieName));
    console.log(1);
  } else
  {
    localStorage.setItem("movieIDs", JSON.parse(checkKey));
    checkKey = movieID + "<br>" + localStorage.getItem("movieIDs");
    localStorage.setItem("movieIDs", JSON.stringify(checkKey));
    localStorage.setItem("movieNames", JSON.parse(checkName));
    checkName = movieName + "<br>" + localStorage.getItem("movieNames");
    localStorage.setItem("movieNames", JSON.stringify(checkName));
    console.log(2);
  }

  document.getElementById("myListButton").style.display = "none";
  document.getElementById("myListButton2").style.display = "inline-block";
}

async function removeMovieID() {
  let params = currentPageUrl.searchParams;
  var movieID = params.get('movieid');
  API_URL = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=b0d1306fad90411efb79cc7bced5c6f2';
  const response = await fetch(API_URL);
  const json = await response.json();
  var movieID = json.id;
  var movieName = json.original_title;
  localStorage.removeItem("movieIDs", JSON.stringify(movieID));
  localStorage.removeItem("movieNames", JSON.stringify(movieName));
  document.getElementById("myListButton2").style.display = "none";
  document.getElementById("myListButton").style.display = "inline-block";
}
