import { useNavigate, useLocation } from "react-router-dom"

import { AiOutlineHeart as HeartIcon, AiOutlineHome as HomeIcon } from "react-icons/ai"
import { RiCompassDiscoverLine as DiscoverIcon } from "react-icons/ri"

import * as S from "./styles"

const Footer = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	return (
		<S.Footer>
			<HomeIcon
				style={S.FooterIcons}
				className={pathname === "home" && "selected"}
				onClick={() => navigate("/home")}
			/>
			<DiscoverIcon
				style={S.FooterIcons}
				className={pathname === "home" && "selected"}
				onClick={() => navigate("/discover")}
			/>
			<HeartIcon
				style={S.FooterIcons}
				className={pathname === "home" && "selected"}
				onClick={() => navigate("/liked")}
			/>
		</S.Footer>
	)
}

export default Footer
