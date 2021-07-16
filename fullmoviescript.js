const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=b0d1306fad90411efb79cc7bced5c6f2';

async function getMovieData() {
  const response = await fetch(API_URL);
  const json = await response.json();

  // fullmovie.html START

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

  document.getElementById("details").style.backgroundImage = "url('https://image.tmdb.org/t/p/original/"+json.backdrop_path+"')";

  // fullmovie.html END

  console.log(json);
}

getMovieData();
