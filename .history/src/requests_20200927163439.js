const API_KEY = "8712b0610496fec8b39847307d977e5f";

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ja-JP`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ja-JP`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHororMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchTv: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};
