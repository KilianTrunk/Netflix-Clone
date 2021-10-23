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

  // ********************************************* KODA ZA SHRANJEVANJE - START *********************************************


  // ***** ----- MOVIE Names ----- *****

  // shramba podatkov
  var movieNAMEs = movieName;

  // če ni nič shranjeno, shrani prazen array
  if (localStorage.getItem('movieNames') == null)
  {
    localStorage.setItem('movieNames', '')
  }



  // shrani podatke v localstorage
  localStorage.setItem('movieNames', movieName);


  // ***** ----- MOVIE IDs ----- *****

  // shramba podatkov
  var movieIDs = movieID;

  // če ni nič shranjeno, shrani prazen array
  if (localStorage.getItem('movieIDs') == null)
  {
    localStorage.setItem('movieIDs', '')
  }

  // shrani podatke v localstorage
  localStorage.setItem('movieIDs', movieID);

  // ********************************************* KODA ZA SHRANJEVANJE - END ***********************************************

  document.getElementById("myListButton").style.display = "none";
  document.getElementById("myListButton2").style.display = "inline-block";
}

async function removeMovieID() {
  localStorage.removeItem('movieIDs');
  localStorage.removeItem('movieNames');
  document.getElementById("myListButton2").style.display = "none";
  document.getElementById("myListButton").style.display = "inline-block";
}
