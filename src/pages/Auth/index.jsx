import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Player } from "@lottiefiles/react-lottie-player"

import { AuthContext } from "../../providers/AuthProvider"
import adopt from "../../assets/animations/adopt.json"

import * as S from "./styles"

const Auth = () => {
	const navigate = useNavigate()
	const { signIn, signUp, user, setUser } = useContext(AuthContext)
	const [userData, setUserData] = useState({})
	const [authPath, setAuthPath] = useState("signIn")
	const [errorWarning, setErrorWarning] = useState("")

	useEffect(() => {
		if (user) navigate("/discover")
	})

	const handleSubmit = e => {
		e.preventDefault()
		setErrorWarning("")
		if (authPath === "signIn") {
			signIn(userData.email, userData.password)
				.then(({ data }) => {
					setUser(data)
					navigate("/discover")
				})
				.catch(({ response }) => setErrorWarning(response.data))
		}
		if (authPath === "signUp") {
			signUp(userData.name, userData.email, userData.password, userData.cep, userData.phone)
				.then(() => {
					setUserData({ ...userData, password: "" })
					setAuthPath("signIn")
				})
				.catch(({ response }) => setErrorWarning(response.data))
		}
	}

	return (
		<main>
			<S.Wrapper>
				<S.Logo>adopet ❤</S.Logo>
				<S.Header path={authPath}>
					<h2
						className={authPath === "signIn" && "active"}
						onClick={() => {
							setErrorWarning("")
							setUserData({ ...userData, password: "" })
							setAuthPath("signIn")
						}}>
						SignIn
					</h2>
					<h2
						className={authPath === "signUp" && "active"}
						onClick={() => {
							setErrorWarning("")
							setUserData({ ...userData, password: "" })
							setAuthPath("signUp")
						}}>
						SignUp
					</h2>
				</S.Header>
				<S.Form onSubmit={handleSubmit}>
					{authPath === "signUp" && (
						<input
							type="text"
							placeholder="Name"
							required
							value={userData.name}
							onChange={e => setUserData({ ...userData, name: e.target.value })}
						/>
					)}
					<input
						type="email"
						placeholder="E-mail"
						required
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
						onChange={e => setUserData({ ...userData, email: e.target.value })}
					/>
					<input
						type="password"
						placeholder="Password"
						required
						minLength={authPath === "signUp" && 8}
						value={userData.password}
						onChange={e => setUserData({ ...userData, password: e.target.value })}
					/>
					{authPath === "signUp" && (
						<>
							<input
								type="password"
								placeholder="Confirm password"
								required
								onChange={e => {
									e.target.value !== userData.password
										? setErrorWarning("Passwords don't match")
										: setErrorWarning("")
									setUserData({ ...userData, confirmPassword: e.target.value })
								}}
							/>
							<input
								type="text"
								placeholder="Phone number"
								required
								value={userData.phone}
								maxLength="15"
								onChange={e => {
									e.target.value = e.target.value.replace(/[^0-9]/g, "")
									e.target.value = e.target.value.replace(
										/(\d{2})(\d)/,
										"($1) $2"
									)
									e.target.value = e.target.value.replace(/(\d{5})(\d)/, "$1-$2")
									setUserData({ ...userData, phone: e.target.value })
								}}
							/>
							<input
								type="text"
								placeholder="CEP"
								required
								value={userData.cep}
								maxLength="8"
								onChange={e => {
									e.target.value = e.target.value.replace(/[^0-9]/g, "")
									setUserData({ ...userData, cep: e.target.value })
								}}
							/>
						</>
					)}
					{errorWarning && <S.ErrorWarning>{errorWarning}</S.ErrorWarning>}
					<button type="submit">{authPath === "signIn" ? "Sign In" : "Sign Up"}</button>
				</S.Form>
				<S.AnimationContainer>
					<Player autoplay loop src={adopt} style={{ height: "100%", width: "100%" }} />
				</S.AnimationContainer>
			</S.Wrapper>
		</main>
	)
}

export default Auth
