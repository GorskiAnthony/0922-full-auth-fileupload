import { useState } from "react";
import instance from "../helpers/axios";

const Auth = () => {
	const [registerUser, setRegisterUser] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [loginUser, setLoginUser] = useState({
		email: "jane@doe.com",
		password: "azerty",
	});

	const handleChangeRegister = (e) => {
		const { name, value } = e.target;
		setRegisterUser({ ...registerUser, [name]: value });
	};

	const handleChangeLogin = (e) => {
		const { name, value } = e.target;
		setLoginUser({ ...loginUser, [name]: value });
	};

	const handleRegister = (e) => {
		e.preventDefault();
		instance
			.post("/auth/register", registerUser)
			.then((res) => console.log(res.data))
			.catch((err) => console.error(err));
	};

	const handleLogin = (e) => {
		e.preventDefault();
		instance
			.post("/auth/login", loginUser)
			.then((res) => console.log(res.data))
			.catch((err) => console.error(err.response.data));
	};

	return (
		<div style={{ background: "rgba(255,255,255, 0.95)" }}>
			<div className="register">
				<h1>Register</h1>
				<form onSubmit={handleRegister}>
					<input
						type="text"
						placeholder="Nom"
						name="name"
						onChange={handleChangeRegister}
						required
					/>
					<input
						type="email"
						placeholder="Email"
						name="email"
						onChange={handleChangeRegister}
						required
					/>
					<input
						type="password"
						placeholder="Mot de passe"
						name="password"
						onChange={handleChangeRegister}
						required
					/>
					<button type="submit">Inscription</button>
				</form>
			</div>
			<div className="login">
				<h1>Login</h1>
				<form onSubmit={handleLogin}>
					<input
						type="email"
						placeholder="Email"
						name="email"
						onChange={handleChangeLogin}
					/>
					<input
						type="password"
						placeholder="Mot de passe"
						name="password"
						onChange={handleChangeLogin}
					/>
					<button type="submit">Connexion</button>
				</form>
			</div>
		</div>
	);
};

export default Auth;
