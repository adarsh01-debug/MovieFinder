document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  var input = document.querySelector(".input");

  if (input.value != "") {
    displayActivity(input.value);
  }
  input.value = "";
});

function displayActivity(input) {
  let titleSearched = document.querySelector(".title");
  let genre = document.querySelector(".genre");
  let runtime = document.querySelector(".runtime");
  let language = document.querySelector(".language");
  let yearOfRelease = document.querySelector(".year");
  let ratedCertificate = document.querySelector(".rated");
  let imdbRating = document.querySelector(".imdb");
  let rottenTomatoesRating = document.querySelector(".rotten");
  let awardsWon = document.querySelector(".awards");
  let boxOfficeCollection = document.querySelector(".box-office");
  let countryReleased = document.querySelector(".country");
  let poster = document.querySelector(".poster");
  let plotOfMovie = document.querySelector(".plot");
  let actors = document.querySelector(".actors");
  let director = document.querySelector(".director");
  let production = document.querySelector(".production");

  const api = `http://www.omdbapi.com/?t=${input}&apikey=33b198db`;

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const { Title } = data;
      const { Genre } = data;
      const { Runtime } = data;
      const { Language } = data;
      const { Released } = data;
      const { Rated } = data;

      if (data.Ratings.length == 2) {
        var { Value } = data.Ratings[0];
        var Value2 = data.Ratings[1].Value;
      } else {
        var { Value } = data.Ratings[0];
      }
      const { Awards } = data;
      const { BoxOffice } = data;
      const { Country } = data;
      const { Poster } = data;
      const { Plot } = data;
      const { Actors } = data;
      const { Director } = data;
      const { Production } = data;

      titleSearched.textContent = Title;
      genre.innerHTML = `<b>Genre:</b> ${Genre}`;
      runtime.innerHTML = `<b>Runtime:</b> ${Runtime}`;
      language.innerHTML = `<b>Language:</b> ${Language}`;
      yearOfRelease.innerHTML = `<b>Released:</b> ${Released}`;
      ratedCertificate.innerHTML = `<b>Rated:</b> ${Rated}`;
      imdbRating.innerHTML = `<b>IMDB:</b> ${Value}`;
      rottenTomatoesRating.innerHTML = `<b>Rotten Tomatoes:</b> ${Value2}`;
      awardsWon.innerHTML = `<b>Awards:</b> ${Awards}`;
      boxOfficeCollection.innerHTML = `<b>Box Office:</b> ${BoxOffice}`;
      countryReleased.innerHTML = `<b>Country:</b> ${Country}`;
      poster.style.visibility = "visible";
      poster.src = Poster;
      plotOfMovie.innerHTML = `<b>Plot:</b> ${Plot}`;
      actors.innerHTML = `<b>Actors:</b> ${Actors}`;
      director.innerHTML = `<b>Director:</b> ${Director}`;
      production.innerHTML = `<b>Production:</b> ${Production}`;
    });
}
