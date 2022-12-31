import { useState, useEffect } from 'react';

export const useFavorites = (movie) => {
	const [favorite, setfavorite] = useState(false);

	useEffect(() => {
		const favMovies = localStorage.getItem("favs");
		let tempMoviesInFavs;
		favMovies === null ? tempMoviesInFavs = [] : (tempMoviesInFavs = JSON.parse(favMovies));

		if (tempMoviesInFavs.find((movieInArray) => movieInArray.id === movie.id)) {
			setfavorite(!favorite);
		}
	}, []);

	return favorite;
};
