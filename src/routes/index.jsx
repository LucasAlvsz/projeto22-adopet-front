import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Auth from "../pages/Auth"
import Chat from "../pages/Chat"
import Discover from "../pages/Discover"
import Home from "../pages/Home"
import Liked from "../pages/Liked"
import Profile from "../pages/Profile"

import PrivateRoutes from "./PrivateRoutes"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/signin" />} />
				<Route path="/signin" element={<Auth />} />
				<Route path="/signup" element={<Auth />} />
				<Route path="/home" element={<Home />} />
				<Route element={<PrivateRoutes />}>
					<Route path="/profile/:id" element={<Profile />} />
					<Route path="/discover" element={<Discover />} />
					<Route path="/liked" element={<Liked />} />
					<Route path="/chat" element={<Chat />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
