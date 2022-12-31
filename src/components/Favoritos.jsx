import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { Navigate } from "react-router-dom";

export const Favoritos = () => {

	let token = sessionStorage.getItem("token");

	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const favMovies = localStorage.getItem("favs");
		const movies = favMovies ? JSON.parse(favMovies) : [];
		setFavorites(movies);
	}, []);

	return (
		<>
			{!token && <Navigate to="/" />}
			<div className="row">
				{favorites.map((movie) => (
					<Card key={movie.id} movie={movie} deleteIcon={true} />
				))}
			</div>
		</>
	);


}


