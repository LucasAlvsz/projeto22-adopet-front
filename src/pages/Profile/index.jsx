import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { PetsContext } from "../../providers/PetsProvider"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import noProfilePic from "../../assets/images/noProfilePic.png"
import {
	MdOutlineNavigateNext as NextIcon,
	MdNavigateBefore as BeforeIcon,
} from "react-icons/md"

import * as S from "./styles"

const Profile = () => {
	const { id } = useParams()

	const { getProfileById } = useContext(PetsContext)
	const [petProfile, setPetProfile] = useState({})
	const [currentPic, setCurrentPic] = useState(0)
	const isDesktop = window.innerWidth > 768

	useEffect(() => {
		getProfileById(id)
			.then(({ data }) => setPetProfile(data))
			.catch(({ response }) => console.log(response.data))
	}, [])

	const handdleAdopt = () => {
		const phone = petProfile.ownerUser.phone.replace(/\D/g, "")
		const message =
			"Olá, gostaria de adotar o pet " +
			petProfile.name +
			".\n" +
			petProfile.petPictures[currentPic].picture.url
		window.open(
			`https://wa.me/55${phone}?text=` + encodeURIComponent(message)
		)
	}

	return (
		<main>
			<Header />
			<S.Wrapper>
				<S.Pictures>
					<S.Options firstImage={currentPic === 0 && true}>
						{currentPic >= 1 && (
							<BeforeIcon
								style={S.PictureOptions}
								onClick={() => setCurrentPic(currentPic - 1)}
							/>
						)}
						{petProfile.petPictures?.length > 1 && (
							<NextIcon
								style={S.PictureOptions}
								onClick={() =>
									petProfile.petPictures.length - 1 >
									currentPic
										? setCurrentPic(currentPic + 1)
										: setCurrentPic(0)
								}
							/>
						)}
					</S.Options>
					{petProfile.petPictures && (
						<img
							src={petProfile.petPictures[currentPic].picture.url}
						/>
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
					</S.OwnerInfos>
					<S.About>
						<p> {petProfile.about}</p>
					</S.About>
					<br />
					<S.Footer>
						<button onClick={handdleAdopt}>Adopt Me</button>
					</S.Footer>
				</S.Infos>
			</S.Wrapper>
			{isDesktop && <Footer />}
		</main>
	)
}

export default Profile
