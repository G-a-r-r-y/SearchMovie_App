import axios from "axios";
import SearchForm from "../Components/SearchForm";
import MoviesList from "../Components/MoviesList";

import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "one piece";

  try {
    const movieSearchEndpoint = `http://www.omdbapi.com/?apiKey=${apiKey}&s=${searchTerm}`;
    const response = await axios.get(movieSearchEndpoint);
    return {
      movieApiResponse: response.data,
      searchTerm: searchTerm,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errorMsg =
      error?.response?.data?.Error || error.message || "Something went wrong.";

    return {
      movieApiResponse: null,
      searchTerm: searchTerm,
      isError: true,
      error: errorMsg,
    };
  }
}

function Home() {
  const data = useLoaderData();
  return (
    <div>
      <SearchForm searchTerm={data.searchTerm} />
      <MoviesList data={data} />
    </div>
  );
}

export default Home;
