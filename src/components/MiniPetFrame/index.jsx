import { useNavigate } from "react-router-dom"

import { IoLocationSharp as LocationIcon } from "react-icons/io5"

import * as S from "./styles"

const MiniPetFrame = ({ id, petName, mainPic, adress }) => {
	const navigate = useNavigate()
	return (
		<S.MiniPetFrame onClick={() => navigate(`/profile/${id}`)}>
			<img src={mainPic} />
			<S.petInfo>
				<h1>{petName}</h1>
			</S.petInfo>
			<S.petInfo>
				<p>
					<LocationIcon style={S.InfoIcon} />
					{adress.city.name} - {adress.state.name}
				</p>
			</S.petInfo>
		</S.MiniPetFrame>
	)
}

export default MiniPetFrame
