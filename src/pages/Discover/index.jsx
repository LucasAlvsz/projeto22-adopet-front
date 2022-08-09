import { useContext, useEffect, useState } from "react"

import PetFrame from "../../components/PetFrame"
import { PetsContext } from "../../providers/PetsProvider"
import * as S from "./styles"

const Discover = () => {
	const { getPets } = useContext(PetsContext)
	const [pets, setPets] = useState([])
	const [currentPet, setCurrentPet] = useState(0)

	console.log(pets)
	console.log(currentPet)

	useEffect(() => {
		getPets()
			.then(({ data }) => setPets(data))
			.catch(({ response }) => console.log(response.data))
	}, [])

	const teste = navigator.geolocation.getCurrentPosition(position => {
		console.log(position)
	})

	return (
		<main>
			<S.Discover>
				{pets.length && currentPet < pets.length && (
					<PetFrame
						key={pets[currentPet].id}
						id={pets[currentPet].id}
						petName={pets[currentPet].name}
						age={pets[currentPet].age}
						weight={pets[currentPet].weight}
						vaccinated={pets[currentPet].vaccinated}
						about={pets[currentPet].about}
						breed={pets[currentPet].breed.name}
						ownerUser={pets[currentPet].ownerUser.name}
						mainPic={pets[currentPet].petPictures[0].picture.url}
						setCurrentPet={currentPic => setCurrentPet(currentPic + currentPet)}
					/>
				)}
			</S.Discover>
		</main>
	)
}

export default Discover

/*
({
						id,
						name,
						age,
						weight,
						vaccinated,
						about,
						breed,
						ownerUser,
						petPictures,
					}) => (
						<PetFrame
							key={id}
							petName={name}
							age={age}
							weight={weight}
							vaccinated={vaccinated}
							about={about}
							breed={breed.name}
							ownerUser={ownerUser.name}
							mainPic={petPictures[0].picture.url}
						/>
					)
				)
*/
