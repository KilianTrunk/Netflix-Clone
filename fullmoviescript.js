var API_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2';
var currentPageUrl = new URL(window.location.href);

async function getMovieData() {

  const response = await fetch(API_URL);
  const json = await response.json();

  let params = currentPageUrl.searchParams;
  var movieID = params.get('movieid');

  var test = document.getElementById("movieTitle");

  /* if (movieID === undefined) {
    API_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2';
    const response = await fetch(API_URL);
    const json = await response.json();

    console.log(json);

    const movieTitle = document.querySelector('#movieTitle');
    movieTitle.innerHTML = json.results[0].original_title;

    const movieOverview = document.querySelector('#movieOverview');
    movieOverview.innerHTML = json.results[0].overview;

    const movieReleaseDate = document.querySelector('#movieReleaseDate');
    movieReleaseDate.innerHTML = json.results[0].release_date;

    const movieLanguage = document.querySelector('#movieLanguage');
    movieLanguage.innerHTML = json.results[0].original_language;

    const movieTagline = document.querySelector('#movieTagline');
    movieTagline.innerHTML = json.results[0].tagline;

    const movieHomepage = document.querySelector('#movieHomepage');
    movieHomepage.innerHTML = json.results[0].homepage;

    document.getElementById("details").style.backgroundImage = "url('https://image.tmdb.org/t/p/original/" + json.results[0].backdrop_path + "')";
  } else {
    API_URL = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=b0d1306fad90411efb79cc7bced5c6f2';
    const response = await fetch(API_URL);
    const json = await response.json();

    console.log(json);

    const movieTitle = document.querySelector('#movieTitle');
    movieTitle.innerHTML = json.original_title;

    const movieOverview = document.querySelector('#movieOverview');
    movieOverview.innerHTML = json.overview;

    const movieReleaseDate = document.querySelector('#movieReleaseDate');
    movieReleaseDate.innerHTML = json.release_date;

    const movieLanguage = document.querySelector('#movieLanguage');
    movieLanguage.innerHTML = json.original_language;

    const movieTagline = document.querySelector('#movieTagline');
    movieTagline.innerHTML = json.tagline;

    const movieHomepage = document.querySelector('#movieHomepage');
    movieHomepage.innerHTML = json.homepage;

    document.getElementById("details").style.backgroundImage = "url('https://image.tmdb.org/t/p/original/" + json.backdrop_path + "')";
  } */

  var test1 = json.status_code;

  if (test1 !== undefined) {
    API_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2';
    const response = await fetch(API_URL);
    const json = await response.json();

    console.log(json);

    const movieTitle = document.querySelector('#movieTitle');
    movieTitle.innerHTML = json.results[0].original_title;

    const movieOverview = document.querySelector('#movieOverview');
    movieOverview.innerHTML = json.results[0].overview;

    const movieReleaseDate = document.querySelector('#movieReleaseDate');
    movieReleaseDate.innerHTML = json.results[0].release_date;

    const movieLanguage = document.querySelector('#movieLanguage');
    movieLanguage.innerHTML = json.results[0].original_language;

    const movieTagline = document.querySelector('#movieTagline');
    movieTagline.innerHTML = json.results[0].tagline;

    const movieHomepage = document.querySelector('#movieHomepage');
    movieHomepage.innerHTML = json.results[0].homepage;

    document.getElementById("details").style.backgroundImage = "url('https://image.tmdb.org/t/p/original/" + json.results[0].backdrop_path + "')";
  } else {
    API_URL = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=b0d1306fad90411efb79cc7bced5c6f2';
    const response = await fetch(API_URL);
    const json = await response.json();

    console.log(json);

    const movieTitle = document.querySelector('#movieTitle');
    movieTitle.innerHTML = json.original_title;

    const movieOverview = document.querySelector('#movieOverview');
    movieOverview.innerHTML = json.overview;

    const movieReleaseDate = document.querySelector('#movieReleaseDate');
    movieReleaseDate.innerHTML = json.release_date;

    const movieLanguage = document.querySelector('#movieLanguage');
    movieLanguage.innerHTML = json.original_language;

    const movieTagline = document.querySelector('#movieTagline');
    movieTagline.innerHTML = json.tagline;

    const movieHomepage = document.querySelector('#movieHomepage');
    movieHomepage.innerHTML = json.homepage;

    document.getElementById("details").style.backgroundImage = "url('https://image.tmdb.org/t/p/original/" + json.backdrop_path + "')";
  }

}

getMovieData();
