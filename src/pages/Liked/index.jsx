import { useContext, useEffect } from "react"

import { PetsContext } from "../../providers/PetsProvider"

import Header from "../../components/Header"
import MiniPetFrame from "../../components/MiniPetFrame"
import Footer from "../../components/Footer"

import * as S from "./styles"
import Filters from "../../components/Filters"

const Liked = () => {
	const { getLikedPets, likedPets, setLikedPets } = useContext(PetsContext)

	useEffect(() => {
		getLikedPets()
			.then(({ data }) => setLikedPets(data))
			.catch(({ response }) => console.log(response))
	}, [])

	return (
		<main>
			<Header />
			<Filters
				getPets={filters =>
					getLikedPets(filters)
						.then(({ data }) => setLikedPets(data))
						.catch(({ response }) => console.log(response.data))
				}
			/>
			<S.Content>
				{likedPets?.map(({ pet }) => (
					<MiniPetFrame
						key={pet.id}
						id={pet.id}
						petName={pet.name}
						mainPic={pet.petPictures[0].picture.url}
						adress={pet.ownerUser.adress}
					/>
				))}
			</S.Content>
			<Footer />
		</main>
	)
}

export default Liked
