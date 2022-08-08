import axios from "axios"
import { createContext } from "react"
import { useLocalStorage } from "../hooks"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useLocalStorage("user", null)
	const signUp = (name, email, password) => {
		return axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, {
			name,
			email,
			password,
		})
	}

	const signIn = (email, password) => {
		return axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, {
			email,
			password,
		})
	}

	const logout = () => useLocalStorage("user", null)

	return (
		<AuthContext.Provider
			value={{
				signUp,
				signIn,
				logout,
				user,
				setUser,
			}}>
			{children}
		</AuthContext.Provider>
	)
}
