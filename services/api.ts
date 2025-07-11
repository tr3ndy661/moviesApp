export const TMDB_CONFIG = {
  baseUrl: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
  }
};

// api calls and fetches
export const fetchMovies = async ({query}: {query: string}) => {
    const endpoint = query
    ? `${TMDB_CONFIG.baseUrl}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.baseUrl}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch (endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    if(!response.ok) {
        throw new Error(`Error fetching movies: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;

};

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzkxMzczMTA2YjVkODRlM2YxY2VkNjZkOTI1OGQ4MyIsIm5iZiI6MTc1MjE5NjYwMy40MDUsInN1YiI6IjY4NzA2NWZiNDAyNzI5NDYxNjUxZjU5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TaCfgdW06ajqN-GyA3-OandXTxf45Qh-K8K0Lr_zIbk'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));