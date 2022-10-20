import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Player } from "@lottiefiles/react-lottie-player"

import { AuthContext } from "../../providers/AuthProvider"
import Loading from "../../components/Loading"
import adopt from "../../assets/animations/adopt.json"

import * as S from "./styles"

const Auth = () => {
	const navigate = useNavigate()
	const { signIn, signUp, user, setUser } = useContext(AuthContext)
	const [userData, setUserData] = useState({})
	const [authPath, setAuthPath] = useState("signIn")
	const [loading, setLoading] = useState(false)
	const [errorWarning, setErrorWarning] = useState(false)

	useEffect(() => {
		if (user) navigate("/discover")
	})

	const handleSubmit = e => {
		e.preventDefault()
		setLoading(true)
		setErrorWarning("")
		if (authPath === "signIn") {
			signIn(userData.email, userData.password)
				.then(({ data }) => {
					setUser(data)
					navigate("/discover")
				})
				.catch(({ response }) => setErrorWarning(response.data))
				.finally(() => setLoading(false))
		} else if (authPath === "signUp") {
			signUp(userData.name, userData.email, userData.password, userData.cep, userData.phone)
				.then(() => {
					setUserData({ ...userData, password: "" })
					setAuthPath("signIn")
				})
				.catch(({ response }) =>
					response.data[0].split(" ")[0] === '"body.phone"'
						? setErrorWarning("Invalid Phone")
						: response.data[0].split(" ")[0] === '"body.cep"'
						? setErrorWarning("Invalid CEP")
						: setErrorWarning(response.data)
				)
				.finally(() => setLoading(false))
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
							if (!loading) {
								setErrorWarning("")
								setUserData({ ...userData, password: "" })
								setAuthPath("signIn")
							}
						}}>
						SignIn
					</h2>
					<h2
						className={authPath === "signUp" && "active"}
						onClick={() => {
							if (!loading) {
								setErrorWarning("")
								setUserData({ ...userData, password: "" })
								setAuthPath("signUp")
							}
						}}>
						SignUp
					</h2>
				</S.Header>
				<S.Form onSubmit={handleSubmit} error={errorWarning}>
					{authPath === "signUp" && (
						<input
							type="text"
							placeholder="Name"
							required
							disabled={loading}
							value={userData.name}
							onChange={e => setUserData({ ...userData, name: e.target.value })}
						/>
					)}
					<input
						type="email"
						placeholder="E-mail"
						required
						disabled={loading}
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
						onChange={e => setUserData({ ...userData, email: e.target.value })}
					/>
					<input
						type="password"
						placeholder="Password"
						required
						disabled={loading}
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
								disabled={loading}
								onChange={e => {
									e.target.value !== userData.password
										? setErrorWarning("Passwords don't match")
										: setErrorWarning("")
									setUserData({ ...userData, confirmPassword: e.target.value })
								}}
							/>
							<input
								type="text"
								name="phone"
								placeholder="Phone number"
								required
								disabled={loading}
								value={userData.phone}
								maxLength="15"
								onChange={e => {
									e.target.value = e.target.value.replace(/[^0-9]/g, "")
									e.target.value = e.target.value.replace(
										/(\d{2})(\d)/,
										"($1) $2"
									)
									e.target.value = e.target.value.replace(/(\d{5})(\d)/, "$1-$2")
									setUserData({
										...userData,
										phone: e.target.value,
									})
								}}
							/>
							<input
								type="text"
								placeholder="CEP"
								required
								disabled={loading}
								value={userData.cep}
								maxLength="9"
								onChange={e => {
									e.target.value = e.target.value.replace(/[^0-9]/g, "")
									e.target.value = e.target.value.replace(
										/(\d{5})(\d{3})/,
										"$1-$2"
									)
									setUserData({
										...userData,
										cep: e.target.value,
									})
								}}
							/>
						</>
					)}
					{errorWarning && <S.ErrorWarning>{errorWarning}</S.ErrorWarning>}
					<button type="submit" disabled={loading}>
						{loading ? <Loading /> : authPath === "signIn" ? "Sign In" : "Sign Up"}
					</button>
				</S.Form>
				<S.AnimationContainer>
					<Player autoplay loop src={adopt} style={{ height: "100%", width: "100%" }} />
				</S.AnimationContainer>
			</S.Wrapper>
		</main>
	)
}

export default Auth
