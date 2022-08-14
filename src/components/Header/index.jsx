import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../providers/AuthProvider"

import { BiArrowBack as ReturnIcon } from "react-icons/bi"
import { HiMenuAlt4 as MenuIcon } from "react-icons/hi"
import { FiLogOut as LogOutIcon } from "react-icons/fi"

import * as S from "./styles"

const Header = () => {
	const navigate = useNavigate()
	const { setUser } = useContext(AuthContext)
	const [openMenu, setOpenMenu] = useState(false)

	const handleLogOut = () => {
		localStorage.clear()
		setUser(null)
		setOpenMenu(false)
		navigate("/")
	}

	return (
		<S.Options openMenu={openMenu}>
			<span>
				<ReturnIcon style={S.OptionIcon} onClick={() => navigate(-1)} />
			</span>
			<span onClick={() => setOpenMenu(!openMenu)}>
				<MenuIcon style={S.OptionIcon} />
			</span>
			{openMenu && (
				<S.Menu>
					<span onClick={handleLogOut}>
						<LogOutIcon style={S.LogOutIcon} />
					</span>
				</S.Menu>
			)}
		</S.Options>
	)
}

export default Header
