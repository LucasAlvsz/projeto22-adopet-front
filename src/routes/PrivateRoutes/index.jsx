import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

import { AuthContext } from "../../providers/AuthProvider"

const PrivateRoutes = () => {
	const { user } = useContext(AuthContext)
	return user ? <Outlet /> : <Navigate to="/signin" />
}

export default PrivateRoutes
