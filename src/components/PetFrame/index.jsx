import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { PetsContext } from "../../providers/PetsProvider"

import * as S from "./styles"

const PetFrame = ({ id, petName, breed, mainPic, setCurrentPet }) => {
	const navigate = useNavigate()
	const { addNotInterestedPet } = useContext(PetsContext)
	return (
		<S.Content>
			<img src={mainPic} alt={petName + "picture"} />
			<S.ContentInfos>
				<S.Title>{petName}</S.Title>
				<span>
					<S.InfoContainer>BRASÍLIA DF</S.InfoContainer>
					<S.InfoContainer>{breed}</S.InfoContainer>
				</span>
			</S.ContentInfos>
			<S.ButtonsContainer>
				<button
					onClick={() => {
						addNotInterestedPet(id)
							.then(() => setCurrentPet(+1))
							.catch(({ response }) => console.log(response.data))
					}}>
					❌<p>Nope</p>
				</button>
				<button onclick={() => navigate(`/profile/${id}`)}>
					🐶<p>Profile</p>
				</button>
				<button>
					💗<p>Like</p>
				</button>
			</S.ButtonsContainer>
		</S.Content>
	)
}

export default PetFrame
