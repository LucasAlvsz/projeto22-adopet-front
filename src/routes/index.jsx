import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Auth from "../pages/Auth"
import Chat from "../pages/Chat"
import Discover from "../pages/Discover"
import Home from "../pages/Home"
import Liked from "../pages/Liked"
import Profile from "../pages/Profile"

import PrivateRoutes from "./PrivateRoutes"

const Router = () => {
	console.log(import.meta.env.VITE_SOME_KEY)
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/signin" />} />
				<Route path="/signin" element={<Auth />} />
				<Route path="/signup" element={<Auth />} />
				<Route element={<PrivateRoutes />}>
					<Route path="/profile/:id" element={<Profile />} />
					<Route path="/discover" element={<Discover />} />
					<Route path="/liked" element={<Liked />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router

// const Home = () => {
//console.log(import.meta.env.VITE_SOME_KEY)
// 	return (
// 		<div>
// 			<h1>Home</h1>
// 			<p>Welcome to my website!!!!</p>
// 		</div>
// 	)
// }

const About = () => {
	return (
		<div>
			<h1>About</h1>
			<p>This is the about page.</p>
		</div>
	)
}

const Contact = () => {
	return (
		<div>
			<h1>Contact</h1>
			<p>This is the contact page.</p>
		</div>
	)
}

const NotFound = () => {
	return (
		<div>
			<h1>404</h1>
			<p>Page not found.</p>
		</div>
	)
}
