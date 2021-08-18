import { createStore } from "redux";

const initialState = {
  isLoading: true,
  movies: [],
  selectedMovies: []
};

function movieReducer(state, action) {
  switch (action.type) {
    case "set_is_loading":
      return { ...state, isLoading: action.payload };
    case "load_movies_success":
      // TODO: save the movies into the state and set isLoading to false
      // movies key und isLoading key werden in der state kopie überschrieben
      // wenn state mehrere Ebenen hätte, dann müsste jede separat gespreadet werden vor Befüllen
      // State deshalb immer möglichst flach halten oder immer.js verwenden
      return {
        ...state,
        movies: action.movies,
        isLoading: false
      };
    case "reset_selected_movies":
      return {
        ...state,
        selectedMovies: []
      };
    case "poster_click":
      if (state.selectedMovies.includes(action.payload.id)) {
        return {
          ...state,
          selectedMovies: state.selectedMovies.filter(
            (existingId) => existingId !== action.payload.id
          )
        };
      } else {
        return {
          ...state,
          selectedMovies: [...state.selectedMovies, action.payload.id]
        };
      }

    default:
      return state;
  }
}

export const store = createStore(
  movieReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
