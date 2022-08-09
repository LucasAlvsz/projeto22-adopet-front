import axios from "axios"
import { createContext, useState, useContext } from "react"

import { AuthContext } from "./AuthProvider"

export const PetsContext = createContext()

export const PetsProvider = ({ children }) => {
	const [pets, setPets] = useState([])
	const { user } = useContext(AuthContext)
	const getPets = (filter = "") => {
		return axios.get(`${import.meta.env.VITE_API_URL}/pets?filter=${filter}`, {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		})
	}

	const getProfileById = petId => {
		return axios.get(`${import.meta.env.VITE_API_URL}/pets/profile/${petId}`, {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		})
	}

	const addNotInterestedPet = petId => {
		return axios.post(`${import.meta.env.VITE_API_URL}/pets/${petId}/not-interested`, "", {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		})
	}

	return (
		<PetsContext.Provider
			value={{
				pets,
				setPets,
				getPets,
				getProfileById,
				addNotInterestedPet,
			}}>
			{children}
		</PetsContext.Provider>
	)
}
