// api key  from TMDB
const api = "api_key=09cbcde820a19e4959494fa25a97a645";
// base url of the site
const base_url = "https://api.themoviedb.org/3";
// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
// img url
const img_url = "https://image.tmdb.org/t/p/original";

// requests for movies data 
const requests = {
  fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};


// used to truncate the string 
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
// banner
fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())
.then((data) => {
  console.log(data.results);
  // every refresh the movie will change
  const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
  console.log(setMovie);
  var banner = document.getElementById("banner");
  var bannerTitle = document.getElementById("banner_title");
  var bannerDesc = document.getElementById("banner_description");
  banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
  bannerDesc.innerText = truncate(setMovie.overview, 150);
  bannerTitle.innerText = setMovie.name;
})


// movie rows
fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement('div');
        row.className = "row";
        row.classList.add("netflixrow");
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "NETFLIX ORIGINALS";
        row.appendChild(title);
        const rowPosters = document.createElement("div");
        rowPosters.className = "row_posters";
        row.appendChild(rowPosters);
        data.results.forEach(movie => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            let s = movie.name.replace(/\s+/g, "");
            poster.src = img_url + movie.poster_path;
            rowPosters.appendChild(poster);
        })

    })


    // Popular
fetch(requests.fetchPopular)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement('div');
        row.className = "row";
        row.classList.add("popularrow");
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Trending Now";
        row.appendChild(title);
        const rowPosters = document.createElement("div");
        rowPosters.className = "row_posters";
        row.appendChild(rowPosters);
        data.results.forEach(movie => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            let s = movie.id;
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            rowPosters.appendChild(poster);
        })

    })


    // top rated
    fetch(requests.fetchTrending)
      .then((res) => res.json())
      .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        row.classList.add("trendingrow");
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Top Rated";
        row.appendChild(title);
        const rowPosters = document.createElement("div");
        rowPosters.className = "row_posters";
        row.appendChild(rowPosters);
        data.results.forEach((movie) => {
          const poster = document.createElement("img");
          poster.className = "row_posterLarge";
          let s = movie.id;
          poster.id = s;
          poster.src = img_url + movie.poster_path;
          rowPosters.appendChild(poster);
        });
      });


        // Action Movies
    fetch(requests.fetchActionMovies)
      .then((res) => res.json())
      .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        row.classList.add("actionMoviesrow");
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Action Movies";
        row.appendChild(title);
        const rowPosters = document.createElement("div");
        rowPosters.className = "row_posters";
        row.appendChild(rowPosters);
        data.results.forEach((movie) => {
          const poster = document.createElement("img");
          poster.className = "row_poster";
          let s = movie.id;
          poster.id = s;
          poster.src = img_url + movie.backdrop_path;
          rowPosters.appendChild(poster);
        });
      });


          // Comedy Movies
    fetch(requests.fetchComedyMovies)
      .then((res) => res.json())
      .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        row.classList.add("comedyMoviesrow");
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Comedy Movies";
        row.appendChild(title);
        const rowPosters = document.createElement("div");
        rowPosters.className = "row_posters";
        row.appendChild(rowPosters);
        data.results.forEach((movie) => {
          const poster = document.createElement("img");
          poster.className = "row_poster";
          let s = movie.id;
          poster.id = s;
          poster.src = img_url + movie.backdrop_path;
          rowPosters.appendChild(poster);
        });
      });


          // Horrow Movies
    fetch(requests.fetchhorrorMovies)
      .then((res) => res.json())
      .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        row.classList.add("horrorMoviesrow");
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Horror Movies";
        row.appendChild(title);
        const rowPosters = document.createElement("div");
        rowPosters.className = "row_posters";
        row.appendChild(rowPosters);
        data.results.forEach((movie) => {
          const poster = document.createElement("img");
          poster.className = "row_poster";
          let s = movie.id;
          poster.id = s;
          poster.src = img_url + movie.backdrop_path;
          rowPosters.appendChild(poster);
        });
      });


      
          // Romance Movies
    fetch(requests.fetchRomanceMovies)
      .then((res) => res.json())
      .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        row.classList.add("romanceMoviesrow");
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Romance Movies";
        row.appendChild(title);
        const rowPosters = document.createElement("div");
        rowPosters.className = "row_posters";
        row.appendChild(rowPosters);
        data.results.forEach((movie) => {
          const poster = document.createElement("img");
          poster.className = "row_poster";
          let s = movie.id;
          poster.id = s;
          poster.src = img_url + movie.backdrop_path;
          rowPosters.appendChild(poster);
        });
      });

             // Documentry
    fetch(requests.fetchDocumentaries)
      .then((res) => res.json())
      .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        row.classList.add("documentryrow");
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Documentries";
        row.appendChild(title);
        const rowPosters = document.createElement("div");
        rowPosters.className = "row_posters";
        row.appendChild(rowPosters);
        data.results.forEach((movie) => {
          const poster = document.createElement("img");
          poster.className = "row_poster";
          let s = movie.id;
          poster.id = s;
          poster.src = img_url + movie.backdrop_path;
          rowPosters.appendChild(poster);
        });
      });

