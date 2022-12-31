import { createContext } from "react";

export const DataContext = createContext();

export const ContextProvider = (props) => {
	const favMovies = localStorage.getItem("favs");
	let tempMoviesInFavs;

	favMovies === null ? (tempMoviesInFavs = []) : (tempMoviesInFavs = JSON.parse(favMovies));

	function addOrRemoveFavorite(movie) {
		let movieIsInArray = tempMoviesInFavs.find((movieInArray) => movieInArray.id === movie.id);
		if (!movieIsInArray) {
			tempMoviesInFavs.push(movie);
			localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
		} else {
			tempMoviesInFavs = tempMoviesInFavs.filter((movieInArray) => movieInArray.id !== movie.id);
			localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
		}
	}


	return (
		<DataContext.Provider value={{ addOrRemoveFavorite }}>
			{props.children}
		</DataContext.Provider>
	);
};
