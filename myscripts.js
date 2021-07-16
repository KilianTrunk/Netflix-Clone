const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=b0d1306fad90411efb79cc7bced5c6f2';

async function getMovieData() {
  const response = await fetch(API_URL);
  const json = await response.json();

  // index.html START

  const title = document.querySelector('#originalTitle');
  title.innerHTML = json.original_title;

  const overview = document.querySelector('#overviewText');
  overview.innerHTML = json.overview;

  document.getElementById("main-part").style.backgroundImage = "url('https://image.tmdb.org/t/p/original/"+json.backdrop_path+"')";

  // index.html END

  console.log(json);
}

getMovieData();
