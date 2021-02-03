const URI = (val) =>
  `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${val}&page=1`;

const moviesURI = (page) =>
  `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-09-15&primary_release_date.lte=2021-10-22&api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;

export { URI, moviesURI };
