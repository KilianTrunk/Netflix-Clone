var API_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2';

async function getMovieData() {
  const response = await fetch(API_URL);
  const json = await response.json();

  var movieID = json.results[0].id;

  const title = document.querySelector('#originalTitle');
  title.innerHTML = json.results[0].original_title;

  const overview = document.querySelector('#overviewText');
  overview.innerHTML = json.results[0].overview;

  document.getElementById("main-part").style.backgroundImage = "url('https://image.tmdb.org/t/p/original/"+json.results[0].backdrop_path+"')";

  document.getElementById("fullMovieButton").href="fullmovie.html?movieid="+movieID+" ";

  document.getElementById("img1").src = "https://image.tmdb.org/t/p/original/"+json.results[1].backdrop_path+" ";
  document.getElementById("img2").src = "https://image.tmdb.org/t/p/original/"+json.results[2].backdrop_path+" ";
  document.getElementById("img3").src = "https://image.tmdb.org/t/p/original/"+json.results[3].backdrop_path+" ";
  document.getElementById("img4").src = "https://image.tmdb.org/t/p/original/"+json.results[4].backdrop_path+" ";
  document.getElementById("img5").src = "https://image.tmdb.org/t/p/original/"+json.results[5].backdrop_path+" ";
  document.getElementById("img6").src = "https://image.tmdb.org/t/p/original/"+json.results[6].backdrop_path+" ";
  document.getElementById("img7").src = "https://image.tmdb.org/t/p/original/"+json.results[7].backdrop_path+" ";
  document.getElementById("img8").src = "https://image.tmdb.org/t/p/original/"+json.results[8].backdrop_path+" ";
  document.getElementById("img9").src = "https://image.tmdb.org/t/p/original/"+json.results[9].backdrop_path+" ";

  console.log(json);
}

getMovieData();
