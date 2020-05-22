import axios from 'axios';

const fetchArticlesWithQuery = (searchQuery, page = 0) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=15536216-e4eb8c62c44d17c1d18b1e8f9&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchArticlesWithQuery,
};
