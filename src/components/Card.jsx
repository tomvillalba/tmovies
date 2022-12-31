import React from 'react';
import CardB from 'react-bootstrap/Card';
import { FavoriteAdd, FavoriteAdded } from "./UI/FavoritesMovies";

export const Card = ({ movie, overview = true, favorite = true }) => {

	return (
		<div className="col-6 col-md-4 col-xl-3 carta">
			<CardB className="mb-4" >

				<CardB.Img
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.title}
					style={{ "aspectRatio": 2 / 3 }} />
				<CardB.Body>

					<button className="favorite-btn">{!favorite ? <FavoriteAdded /> : <FavoriteAdd />}</button>


					<CardB.Title >{movie.title.slice(0, 30)}{movie.title.length > 30 && "..."}</CardB.Title>
					{overview &&
						<CardB.Text className="card-text-cut">
							{movie.overview}
						</CardB.Text>}

					<CardB.Link
						href={`/detalle?movieID=${movie.id}`}
						className="btn btn-primary btn-card">
						Ver Película
					</CardB.Link>

				</CardB.Body>
			</CardB>
		</div>
	);
};
