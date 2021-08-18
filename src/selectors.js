export function getAllMovies(state) {
  return state.movies;
}

export function getSelectedMovies(state) {
  return state.selectedMovies;
}

export function getSelectedMoviesCount(state) {
  return state.selectedMovies.length;
}

export function getIsLoading(state) {
  return state.isLoading;
}
