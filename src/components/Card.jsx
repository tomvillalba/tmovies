import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ movie, overview = true }) => {

	return (
		<div className="col-6 col-md-4 col-xl-3 carta">
			<div className=" card my-4" >
				<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{movie.title.slice(0, 30)}{movie.title.length > 30 && "..."}</h5>
					{overview &&
						<p className="card-text card-text-cut">
							{movie.overview}
						</p>}
					<Link to={`/detalle?movieID=${movie.id}`} className="btn btn-primary btn-card">Ver Película</Link>
				</div>
			</div>
		</div>
	);
};
