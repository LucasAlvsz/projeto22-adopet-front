import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { PetsContext } from "../../providers/PetsProvider"

import noProfilePic from "../../assets/images/noProfilePic.png"

import * as S from "./styles"

const Profile = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const { getProfileById } = useContext(PetsContext)
	const [petProfile, setPetProfile] = useState({})
	const [currentPic, setCurrentPic] = useState(0)

	const updateCurrentPic = (() => {
		if (currentPic === "paused") return
		setTimeout(() => {
			petProfile.petPictures?.length - 1 <= currentPic
				? setCurrentPic(0)
				: setCurrentPic(currentPic + 1)
		}, 5000)
	})()

	useEffect(() => {
		getProfileById(id)
			.then(({ data }) => setPetProfile(data))
			.catch(({ response }) => console.log(response.data))
	}, [])

	return (
		<main>
			<S.Pictures>
				<S.Options>
					<div onClick={() => navigate(-1)}></div>
					<div></div>
				</S.Options>
				{petProfile.petPictures && (
					<img src={petProfile.petPictures[currentPic].picture.url} />
				)}
			</S.Pictures>
			<S.Infos>
				<S.HeaderInfos>
					<span>
						<h2>{petProfile.name}</h2>
						<p>Brasília - DF</p>
					</span>
				</S.HeaderInfos>
				<S.PetCharacteristics>
					<S.CharacteristicContainer>
						<h4>{petProfile.sex}</h4>
						<p>Sex</p>
					</S.CharacteristicContainer>
					<S.CharacteristicContainer>
						<h4>
							{(Number.isInteger(petProfile.age / 30 / 12) &&
								petProfile.age / 30 / 12 + " Years") ||
								(Number.isInteger(petProfile.age / 30) &&
									petProfile.age / 30 + " Months") ||
								petProfile.age + " Days"}
						</h4>
						<p>Age</p>
					</S.CharacteristicContainer>
					<S.CharacteristicContainer>
						<h4>
							{(Number.isInteger(petProfile.weight / 1000) &&
								petProfile.weight + " kg") ||
								petProfile.weight + " g"}
						</h4>
						<p>Weight</p>
					</S.CharacteristicContainer>
				</S.PetCharacteristics>
				<S.OwnerInfos>
					<img
						src={
							petProfile.ownerUser?.picUrl
								? petProfile.ownerUser.picUrl
								: noProfilePic
						}
						alt="user profile pic"
					/>
					<div>
						<h4>{petProfile.ownerUser?.name}</h4>
						<p>{petProfile.name} Owner</p>
					</div>
					<span>
						<div></div>
						<div></div>
					</span>
				</S.OwnerInfos>
				<S.About>{petProfile.about}</S.About>
				<br />
				<S.Footer>
					<button>Adopt Me</button>
				</S.Footer>
			</S.Infos>
		</main>
	)
}

export default Profile
