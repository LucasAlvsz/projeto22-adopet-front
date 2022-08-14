import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { PetsContext } from "../../providers/PetsProvider"

import { AiOutlineHeart as HeartIcon } from "react-icons/ai"

import DogProfileIcon from "../../assets/icons/dogIcon.png"
import CatProfileIcon from "../../assets/icons/catIcon.png"

import * as S from "./styles"

const PetFrame = ({ id, petName, type, breed, mainPic, adress, setCurrentPet }) => {
	const navigate = useNavigate()
	const { addNotInterestedPet, addInterestedPet } = useContext(PetsContext)
	return (
		<S.Content>
			<img src={mainPic} alt={petName + "picture"} />
			<S.ContentInfos>
				<S.Title>{petName}</S.Title>
				<span>
					<S.InfoContainer>
						<p>
							{adress?.city.name}-{adress.state.name}
						</p>
					</S.InfoContainer>
					<S.InfoContainer>
						<p>{breed}</p>
					</S.InfoContainer>
				</span>
			</S.ContentInfos>
			<S.ButtonsContainer>
				<button
					onClick={() =>
						addNotInterestedPet(id)
							.then(() => setCurrentPet(+1))
							.catch(({ response }) => console.log(response.data))
					}>
					❌<p>Nope</p>
				</button>
				<button onclick={() => navigate(`/profile/${id}`)}>
					<img src={type === "dog" ? DogProfileIcon : CatProfileIcon} />
					<p>Profile</p>
				</button>
				<button
					onClick={() =>
						addInterestedPet(id)
							.then(() => setCurrentPet(+1))
							.catch(({ response }) => console.log(response.data))
					}>
					💗
					<p>Like</p>
				</button>
			</S.ButtonsContainer>
		</S.Content>
	)
}

export default PetFrame
