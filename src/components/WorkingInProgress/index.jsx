import { Player } from "@lottiefiles/react-lottie-player"

import curiousDog from "../../assets/animations/curious-dog.json"

import * as S from "./styles"

const WorkingInProgress = () => {
	return (
		<S.WorkingInProgress>
			<h1>working in progress...</h1>
			<Player autoplay loop src={curiousDog} style={{ height: "100%", width: "100%" }} />
		</S.WorkingInProgress>
	)
}

export default WorkingInProgress
