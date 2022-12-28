//libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import { Header } from './components/Header';
import { Listado } from './components/Listado';
import { Detalle } from './components/Detalle';
import { Login } from "./components/Login";
import { Footer } from './components/Footer';
import { Resultados } from './components/Resultados';

//Styles
//importar react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";


export const apiKey = "69d166897e8982a44f87677f760d16ad";


const App = () => {

	return (

		<BrowserRouter serRouter>

			<Header />

			<div className="container-xxl d-flex justify-content-center mt-4" style={{ minHeight: "100vh" }}>
				<Routes>
					<Route path="*" element={<p>Esa página no existe</p>} />
					<Route index element={<Login />} />
					<Route exact path="/" element={<Login />} />
					<Route exact path="/listado" element={<Listado />} />
					<Route exact path="/detalle" element={<Detalle />} />
					<Route exact path="/resultados" element={<Resultados />} />
				</Routes>
			</div>

			<Footer />

		</BrowserRouter >


	);
};

export default App;
