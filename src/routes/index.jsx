import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Profile from "../pages/profile"

const Router = () => {
	console.log(import.meta.env.VITE_SOME_KEY)
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Profile />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/*" element={<NotFound />} />
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
