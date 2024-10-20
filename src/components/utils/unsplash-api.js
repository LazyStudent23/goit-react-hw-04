import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPhotos = searchedQuery => {
  const axiosOptions = {
    params: {
      query: searchedQuery,
      orientation: 'portrait',
      per_page: 20,
      client_id: 'ghtWRvlh9H1tGNm1lBUUSi7VXnp7C_q1xzmvHvtnREU',
    },
  };

  return axios.get(`/search/photos`, axiosOptions);
};