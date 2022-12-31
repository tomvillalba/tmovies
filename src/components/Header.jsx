import { useLocation } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useEffect } from 'react';
import { Buscador } from './Buscador';
const swAlert = withReactContent(Swal);


export const Header = () => {
	const location = useLocation();
	const token = sessionStorage.getItem("token");
	useEffect(() => {
		if (!token && location.pathname !== "/") {
			window.location.href = "/";
		}
	}, [location, token]);


	const cerrarSesion = () => {
		if (!sessionStorage.getItem("token")) {
			return swAlert.fire(<h3>¡Aún no has iniciado sesión!</h3>);
		}
		sessionStorage.clear();
		window.location.reload();
	};


	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
			<Container fluid>
				<Navbar.Brand to="#home" className='ms-3 ms-lg-5'>
					<Nav.Link href="/">TMovies</Nav.Link>
				</Navbar.Brand>

				{sessionStorage.getItem("token") && <>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '300px' }}
							navbarScroll
						>
							<Nav.Link href="/listado">Listado</Nav.Link>
							<Nav.Link href="/favoritos">Favoritos</Nav.Link>
							<Nav.Link href="/contacto">Contacto</Nav.Link>
							<Nav.Link onClick={cerrarSesion}>Cerrar Sesión</Nav.Link>
						</Nav>
						<Buscador />
					</Navbar.Collapse>
				</>}


			</Container>
		</Navbar>

	);
};
