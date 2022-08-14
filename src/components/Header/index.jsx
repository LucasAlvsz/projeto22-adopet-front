import { useNavigate } from "react-router-dom"

import { BiArrowBack as ReturnIcon } from "react-icons/bi"
import { HiMenuAlt4 as MenuIcon } from "react-icons/hi"

import * as S from "./styles"

const Header = () => {
	const navigate = useNavigate()
	return (
		<S.Options>
			<span>
				<ReturnIcon style={S.OptionIcon} onClick={() => navigate(-1)} />
			</span>
			<span>
				<MenuIcon style={S.OptionIcon} />
			</span>
		</S.Options>
	)
}

export default Header
