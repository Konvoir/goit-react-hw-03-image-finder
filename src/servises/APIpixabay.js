import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api/";
const apiKey = "22709546-f5c1ca5c0881bb53c54fd0f13";

export const fetchData = ({ searchQuery = "", page = 1 }) => {
  return axios
    .get(
      `?key=${apiKey}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};
