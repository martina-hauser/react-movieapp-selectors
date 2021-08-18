import { Header } from "./header";
import { Content } from "./content";
import { useFetch } from "../useFetch";

export const App = ({ isLoading, movies, dispatch }) => {
  const { data, error } = useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=d7fc424ee402bd0666f5f420c5201966&page=1&region=CH"
  );

  if (data?.results && movies.length === 0) {
    dispatch({ type: "load_movies_success", movies: data.results });
  }

  if (error && isLoading) {
    console.log(error);
    dispatch({ type: "set_is_loading", payload: false });
  }

  return (
    <div className="app">
      <Header />
      <Content isLoading={isLoading} />
    </div>
  );
};
