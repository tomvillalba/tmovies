import { Container, Navbar, Nav } from 'react-bootstrap';

export const Footer = () => {
	return (

		<Navbar variant="light" expand="lg" style={{ marginTop: '100px' }} >
			<Container className="d-flex ">

				<Nav>
					<Navbar.Brand className="secondary fw-semibold m-0" disabled>Tomás Villalba - <Navbar.Text className="secondary">Front End Dev
					</Navbar.Text> </Navbar.Brand>

				</Nav>

				<Nav>
					<Navbar.Text className="secondary me-5">
						© 2022 All rights reserved
					</Navbar.Text>
				</Nav>

				<Nav>
					<Nav.Link href="https://www.linkedin.com/in/tomvillalba/" className="text-secondary">LinkedIn</Nav.Link>
					<Nav.Link href="https://github.com/tomvillalba" className="text-secondary">GitHub</Nav.Link>
					<Nav.Link href="#" className="text-secondary">Contact</Nav.Link>
				</Nav>

			</Container>
		</Navbar>
	);
};
