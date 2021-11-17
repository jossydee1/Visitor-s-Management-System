import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Login.css";
import Axios from "axios";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const Login = (e) => {
		e.preventDefault();

		// setText1([input1, ...text1]);
		setUsername("");

		// setText2([input2, ...text2]);
		setPassword("");

		Axios.post("http://localhost/testing/login.php", {
			username: username,
			password: password,
		}).then(() => {
			// alert("success");
			console.log("Successsss");
		});

		// 	auth
		// 		.signInWithEmailAndPassword(username, password)
		// 		.then((auth) => {
		// 			useHistory.push("/");
		// 		})
		// 		.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<form>
				<div className="login__input">
					<label>
						{" "}
						User Name
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>

					<label>
						{" "}
						Password
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
				</div>

				<Link to="/vms/" className="login__button">
					<span>Login</span>
				</Link>
			</form>
		</div>
	);
}

export default Login;
