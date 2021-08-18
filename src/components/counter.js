export function Counter({ isLoading, count, dispatch }) {
  const handleClick = () => {
    console.log("clicked on counter");
    dispatch({ type: "reset_selected_movies" });
    // good practice: dispatch(resetSelectedMoviesAction) -> action importieren aus separatem file
  };

  return (
    <span
      onClick={handleClick}
      className={"counter" + (isLoading ? " counter-hidden" : "")}
    >
      {count}
    </span>
  );
}
