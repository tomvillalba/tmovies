import React, { useState, useEffect } from "react";
import CardB from "react-bootstrap/Card";
import { useContext } from "react";
import { DataContext } from "../context/Context";
import { FavoriteAdd, FavoriteAdded, FavoriteDelete } from "./UI/FavoritesMovies";

export const Card = ({ movie, overview = true, deleteIcon = false }) => {


	const [favorite, setfavorite] = useState(false);
	const { addOrRemoveFavorite } = useContext(DataContext);
	const handleAddOrRemoveFavorite = () => {
		addOrRemoveFavorite(movie, (isFavorite) => setfavorite(isFavorite));
		setfavorite(!favorite);
	};

	useEffect(() => {
		const favMovies = localStorage.getItem("favs");
		if (favMovies === null) return;
		const tempMoviesInFavs = JSON.parse(favMovies);
		const movieIsInArray = tempMoviesInFavs.find((movieInArray) => movieInArray.id === movie.id);
		setfavorite(!!movieIsInArray);
	}, [movie.id]);



	return (
		<div className="col-6 col-md-4 col-xl-3 carta" key={movie.id}>
			<CardB className="mb-4">
				<CardB.Img
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.title}
					style={{ aspectRatio: 2 / 3 }}
				/>
				<CardB.Body>
					<button className="favorite-btn" onClick={handleAddOrRemoveFavorite}>
						{
							deleteIcon ? (<FavoriteDelete />) : (favorite ? <FavoriteAdded /> : <FavoriteAdd />)
						}
					</button>

					<CardB.Title>
						{movie.title.slice(0, 30)}{movie.title.length > 30 && "..."}
					</CardB.Title>
					{overview && (
						<CardB.Text className="card-text-cut">{movie.overview}</CardB.Text>
					)}
					{/* <FavoriteDelete /> */}
					<CardB.Link
						href={`/detalle?movieID=${movie.id}`}
						className="btn btn-primary btn-card"
					>
						Ver Película
					</CardB.Link>
				</CardB.Body>
			</CardB>
		</div>
	);
};
