import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
/* const api_key = process.env.TMDB_API; */
const api_key = "35b3dd45bcb38208d590224e2f0777d8";

const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=ta-tam&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
