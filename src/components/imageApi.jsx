import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImage = async (name, page) => {
  const searchParams = new URLSearchParams({
    key: '28436023-a5d1ac3dfed2e17b83fc46f1a',
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: 12,
  });
  return await axios.get(`?${searchParams}`).then(response => response.data);
};
