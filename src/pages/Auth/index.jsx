import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../providers/AuthProvider"

import * as S from "./styles"

const Auth = () => {
	const navigate = useNavigate()
	const { signIn, signUp, user, setUser } = useContext(AuthContext)
	const [userData, setUserData] = useState({})
	const [authPath, setAuthPath] = useState("signIn")

	useEffect(() => {
		if (user) navigate("/discover")
	})

	const handleSubmit = e => {
		e.preventDefault()
		if (authPath === "signIn") {
			signIn(userData.email, userData.password)
				.then(({ data }) => {
					setUser(data)
					navigate("/discover")
				})
				.catch(({ response }) => console.log(response.data))
		}
	}

	return (
		<main>
			{/* <S.Container> */}
			<S.Header path={authPath}>
				<h2
					className={authPath === "signIn" && "active"}
					onClick={() => setAuthPath("signIn")}>
					SignIn
				</h2>
				<h2
					className={authPath === "signUp" && "active"}
					onClick={() => setAuthPath("signUp")}>
					SignUp
				</h2>
			</S.Header>
			<S.Form onSubmit={handleSubmit}>
				{authPath === "signUp" && (
					<input
						type="text"
						placeholder="Name"
						required
						onChange={e => setUserData({ ...userData, name: e.target.value })}
					/>
				)}
				<input
					type="email"
					placeholder="E-mail"
					required
					onChange={e => setUserData({ ...userData, email: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Password"
					required
					onChange={e => setUserData({ ...userData, password: e.target.value })}
				/>
				{authPath === "signUp" && (
					<input
						type="password"
						placeholder="Confirm password"
						required
						onChange={e => {
							setUserData({ ...userData, confirmPassword: e.target.value })
						}}
					/>
				)}
				<button type="submit">{authPath === "signIn" ? "Sign In" : "Sign Up"}</button>
			</S.Form>
			{/* </S.Container> */}
		</main>
	)
}

export default Auth
