import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const swAlert = withReactContent(Swal);

export const Buscador = () => {

	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		const keyword = e.target.keyword.value.trim();
		if (keyword.length === 0) {
			return swAlert.fire(<p>Debes escribir una palabra clave </p>);
		} else if (keyword.length < 4) {
			return swAlert.fire(<p>Debes escribir al menos 4 caracteres</p>);
		} else {
			e.target.keyword.value = "";
			navigate(`/resultados/?search=${keyword}`);
		}
	};

	return (
		<Form className="d-flex" onSubmit={submitHandler} >
			<Form.Control
				type="search"
				name="keyword"
				placeholder="Buscar"
				className="me-2"
				aria-label="Search"
			/>
			<Button variant="outline-success" type="submit">Buscar</Button>
		</Form>
	);
};


