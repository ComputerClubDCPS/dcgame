const API_KEY = "2713804610e1e236b1cf44bfac3a7776";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MOVIE_ENDPOINT = (page, query) =>  buildUrl("https://api.themoviedb.org/3/movie/popular", {
  api_key: API_KEY,
  language: "en-US",
  query,
  page,
});

const TV_SHOW_ENDPOINT = (page, query) => buildUrl("https://api.themoviedb.org/3/tv/popular", {
  api_key: API_KEY,
  language: "en-US",
  query,
  page,
})

class MoviesService {
  async fetchMovies(page = 1, query = "") {
    try {
      const response = await fetch(MOVIE_ENDPOINT(page, query));
      const data = await response.json();
      return data.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        image: `${IMAGE_BASE_URL}${movie.poster_path}`,
        description: movie.overview,
        rating: movie.vote_average,
        releaseDate: movie.release_date,
        url: `watch/play.html?id=${movie.id}&type=movie`
      }));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  async fetchTVShows(page = 1, query = "") {
    try {
      const response = await fetch(TV_SHOW_ENDPOINT(page, query));
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching TV shows:", error);
    }
  }

  async fetchContent(page = 1, query = "", type = "movie") {
    let endpoint = "";

    if (type === "movie") {
      if (query) {
        endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`;
      } else {
        endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
      }
    } else if (type === "tv") {
      if (query) {
        endpoint = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`;
      } else {
        endpoint = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
      }
    }

    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      if (type === "movie" && data.results) {
        displayMovies(data.results, page === 1);
      } else if (type === "tv" && data.results) {
        displayTVShows(data.results, page === 1);
      }
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  }

}