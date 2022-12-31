import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { apiKey } from '../App';
import { Card } from './Card';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const swAlert = withReactContent(Swal);

export const Resultados = () => {

	// window.scrollTo(0, 0);

	let token = sessionStorage.getItem('token');
	const location = useLocation();
	let searchParams = new URLSearchParams(location.search);
	const search = searchParams.get('search');

	const [totalResults, setTotalResults] = useState([]);
	const [moviesResults, setMoviesResults] = useState([]);

	useEffect(() => {
		const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&query=${search}&page=1&include_adult=false`;
		axios.get(endPoint)
			.then(res => {
				const movies = res.data.results;
				setMoviesResults(movies);
				setTotalResults(res.data.total_results);
			})
			.catch(e => {
				swAlert.fire(<p>Uuuups...a Algo salió mal</p>);
			}
			);
	}, [search]); // aquí se pasa el valor de search como dependencia

	return (
		<div>
			{!token && <Navigate to="/" />}
			{!moviesResults && <p>Cargando...</p>}
			<h3>Buscaste: <b>{search}</b> </h3>
			{moviesResults.length === 0
				? <h4><em>No hay resultados</em> </h4>
				: <h5>Resultados: <em>{totalResults}</em> </h5>}


			<div className="row carta">
				{
					moviesResults.map((movie, idx) => {
						return (
							movie.poster_path &&
							<Card key={idx} movie={movie} overview={false} />
						);
					})
				}
			</div>
		</div>
	);
};