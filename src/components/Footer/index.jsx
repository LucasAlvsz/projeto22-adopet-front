import { useNavigate, useLocation } from "react-router-dom"

import { AiOutlineHeart as HeartIcon, AiOutlineHome as HomeIcon } from "react-icons/ai"
import { RiCompassDiscoverLine as DiscoverIcon } from "react-icons/ri"
import { IoChatbubblesOutline as ChatIcon } from "react-icons/io5"

import * as S from "./styles"

const Footer = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	return (
		<S.Footer>
			<HomeIcon
				style={S.FooterIcons}
				className={pathname === "/home" && "selected"}
				onClick={() => navigate("/home")}
			/>
			<DiscoverIcon
				style={S.FooterIcons}
				className={pathname === "/discover" && "selected"}
				onClick={() => navigate("/discover")}
			/>
			<HeartIcon
				style={S.FooterIcons}
				className={pathname === "/liked" && "selected"}
				onClick={() => navigate("/liked")}
			/>
			<ChatIcon
				style={S.FooterIcons}
				className={pathname === "/chat" && "selected"}
				onClick={() => navigate("/chat")}
			/>
		</S.Footer>
	)
}

export default Footer
