import { Player } from "@lottiefiles/react-lottie-player"

import catLoadingAnimation from "../../assets/animations/catLoading.json"

import * as S from "./styles"

const Loading = ({ width, height, center }) => {
	return (
		<S.LoadingContainer center={center || false}>
			<Player
				autoplay
				loop
				src={catLoadingAnimation}
				style={{ height: height || "35px", width: width || "35px" }}
			/>
		</S.LoadingContainer>
	)
}

export default Loading
