import { connect } from "react-redux";
import { MovieList } from "../components/movie-list";
import { getAllMovies, getSelectedMovies } from "../selectors";

function mapStateToProps(state) {
  return {
    movies: getAllMovies(state),
    selectedMovies: getSelectedMovies(state)
  };
}

export const MovieListContainer = connect(mapStateToProps)(MovieList);
