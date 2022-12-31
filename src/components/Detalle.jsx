import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { apiKey } from '../App';
import { useContext } from "react";
import { Context } from '../context/Context';

const swAlert = withReactContent(Swal);

export const Detalle = () => {

	const valor = useContext(Context);
	console.log(valor);
	let token = sessionStorage.getItem("token");

	let query = new URLSearchParams(window.location.search);
	let movieID = query.get("movieID");

	const [movie, setMovie] = useState(null);

	useEffect(() => {
		const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=es-ES`;
		axios.get(endPoint)
			.then(res => {
				const movieData = res.data;
				setMovie(movieData);
			}
			)
			.catch(e => {
				swAlert.fire(<h3>Uuuups... Algo salió mal</h3>);
			}
			);
	}, [movieID]);


	return (

		<div >
			{!token && <Navigate to="/" />}
			{!movie && <p>Cargando...</p>}
			{movie &&
				<>
					<h2 className="">{movie.title}</h2>
					<div className="row">
						<div className="col-4">
							<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top rounded-3" alt={movie.title} style={{ "aspectRatio": 2 / 3 }} />
						</div>
						<div className="col-8">
							<h5 >Fecha de estreno: {movie.release_date}</h5>
							<h5>Reseña:</h5>
							<p>{movie.overview}</p>
							<h5 className='text-secondary'>Géneros:</h5>
							<ul>
								{movie.genres.map((genre) =>
									genre.name === "Suspense"
										? <li key={genre.id}>Suspenso</li>
										: <li key={genre.id}>{genre.name}</li>
								)}
							</ul>
							{!!movie.vote_average ? <><h5 className='my-4'>Rating: {movie.vote_average}</h5></> : <><h5 className='my-4'>Rating: Sin calificar</h5></>}


						</div>
					</div>
				</>
			}
		</div>
	);
};