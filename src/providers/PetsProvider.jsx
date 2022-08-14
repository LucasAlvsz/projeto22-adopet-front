import axios from "axios"
import { createContext, useState, useContext } from "react"

import { AuthContext } from "./AuthProvider"
import formatFilters from "../utils/formatFiltersUtils"

export const PetsContext = createContext()

export const PetsProvider = ({ children }) => {
	const [pets, setPets] = useState([])
	const { user } = useContext(AuthContext)
	const getPets = filters => {
		const formatedFilters = formatFilters(filters)
		return axios.get(`${import.meta.env.VITE_API_URL}/pets?${formatedFilters}`, {
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

	const addInterestedPet = petId => {
		return axios.post(`${import.meta.env.VITE_API_URL}/pets/${petId}/interested`, "", {
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
				addInterestedPet,
			}}>
			{children}
		</PetsContext.Provider>
	)
}
