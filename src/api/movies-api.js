import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'aee404d75c4c2c296f37b55a19cb21fa',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getMoviesBySearch = async search => {
  const { data } = await instance.get(`/search/movie?query=${search}`);
  return data;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getCastById = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getReviewstById = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
