// import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Navigate, useNavigate } from "react-router-dom";
const swAlert = withReactContent(Swal);

export const Login = () => {

	const navigate = useNavigate();

	const submitHandler = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;

		const regexEmail = (email) => {
			return String(email)
				.toLowerCase()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				);
		};

		if (email === "" || password === "") {
			swAlert.fire(<p>Por favor, complete todos los campos</p>);
			return;
		}

		if (email !== "" && !regexEmail(email)) {
			swAlert.fire(<p>Debes escribir una dirección valida</p>);
			return;
		}

		if (email !== "challenge@alkemy.org" || password !== "react") {
			swAlert.fire(<p>Credenciales invalidas</p>);
			return;
		}
		// axios
		// 	.post("http://challenge-react.alkemy.org", { email, password })
		// 	.then(res => {
		swAlert.fire(<p>Perfecto! ingresaste correctamente</p>);
		// const token = res.data.token;
		sessionStorage.setItem("token", "token");
		navigate("/listado");
		// 	});
	};

	let token = sessionStorage.getItem("token");

	return (
		<div className="">
			{token && <Navigate to="/listado" />}
			<div>
				<h2 className="display-6 text-dark mt-3">Formulario de login</h2>
				<form className="d-flex flex-column justify-content-center align-items-center" onSubmit={submitHandler}>
					<br />
					<label className="form-label">
						<span>Correo electrónico</span>
						<br />
						<input type="text" name="email" className="form-control" />
					</label>
					<br />
					<label className="form-label">
						<span>Contraseña</span>
						<br />
						<input type="password" name="password" className="form-control" />
					</label>
					<br />
					<button type="submit" className="btn btn-success">Ingresar</button>
				</form>
			</div>

		</div>
	);
};
