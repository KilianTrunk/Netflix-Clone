var API_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=b0d1306fad90411efb79cc7bced5c6f2';
document.getElementById("myListButton2").style.display = "none";

async function getMovieData() {
  const response = await fetch(API_URL);
  const json = await response.json();
  var movieID = json.results[0].id;

  const title = document.querySelector('#originalTitle');
  title.innerHTML = json.results[0].original_title;

  const overview = document.querySelector('#overviewText');
  overview.innerHTML = json.results[0].overview;

  document.getElementById("main-part").style.backgroundImage = "url('https://image.tmdb.org/t/p/original/" + json.results[0].backdrop_path + "')";

  document.getElementById("fullMovieButton").href = "fullmovie.html?movieid=" + movieID + " ";

  json.results.forEach(function(value, index) {
    var selector = 'img' + index;
    var element = document.getElementById(selector);
    if (element) {
      element.src = "https://image.tmdb.org/t/p/original" + value.backdrop_path;
      var hrefselector = 'slider-img-' + index;
      document.getElementById(hrefselector).href = "fullmovie.html?movieid=" + value.id + "";
    }
  });

  console.log(json);

}

getMovieData();

async function saveMovieID() {
  const response = await fetch(API_URL);
  const json = await response.json();
  var movieID = json.results[0].id;
  var movieName = json.results[0].original_title;

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
