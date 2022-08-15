import { Player } from "@lottiefiles/react-lottie-player"

import nothingHereAnimation from "../../assets/animations/nothingHereAnimation.json"

import * as S from "./styles"

const NothingHere = () => {
	return (
		<S.NothingHereContainer>
			<Player
				autoplay
				loop
				src={nothingHereAnimation}
				style={{ height: "100%", width: "100%" }}
			/>
			<p>Nothing to see here</p>
		</S.NothingHereContainer>
	)
}

export default NothingHere
