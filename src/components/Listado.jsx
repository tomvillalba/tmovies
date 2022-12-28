import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Card } from "./Card";
import { apiKey } from "../App";

const swAlert = withReactContent(Swal);
export const Listado = () => {


	let token = sessionStorage.getItem("token");

	const [moviesList, setMoviesList] = useState([]);
	useEffect(() => {
		const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES`;

		axios.get(endPoint)
			.then(res => {
				const { results } = res.data;
				setMoviesList(results);
			})
			.catch(e => {
				swAlert.fire(<h3>Uuuups... Algo salió mal</h3>);
			}
			);
	}, [setMoviesList]);

	return (
		<>
			{!token && <Navigate to="/" />}

			<div className="row carta">
				{
					moviesList.map((movie, idx) => {
						return (
							movie.poster_path &&
							<Card key={idx} movie={movie} />
						);
					})
				}
			</div>

		</>
	);
};