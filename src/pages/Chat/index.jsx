import { useEffect, useState, useContext } from "react"
// import io from "socket.io-client"

import { AuthContext } from "../../providers/AuthProvider"

const Chat = () => {
	//const { user } = useContext(AuthContext)
	// const socket = io(import.meta.env.VITE_API_URL, {
	// 	withCredentials: true,
	// 	extraHeaders: {
	// 		Authorization: "Bearer " + user.token,
	// 	},
	// })
	const [message, setMessage] = useState()
	//const [message, setMessage] = useState("")
	//	console.log("s")

	// socket.on("message", data => {
	// 	console.log(data)
	// 	setMessages(data)
	// })

	return (
		<div className="chat">
			<h1>Chat</h1>
			<form
				method="post"
				enctype="multipart/form-data"
				onSubmit={e => {
					e.preventDefault()
					console.log(message)
				}}>
				<div>
					<label for="file">Choose file to upload</label>
					<input
						type="file"
						name="file"
						onChange={e => {
							console.log(e.target.value)
							setMessage(e.target.files[0])
						}}
					/>
				</div>
				<div>
					<button>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default Chat
