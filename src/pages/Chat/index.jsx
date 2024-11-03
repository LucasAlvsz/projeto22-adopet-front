import { io } from 'socket.io-client';

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import WorkingInProgress from "../../components/WorkingInProgress"

const socket = io('https://special-goggles-p5jwqjx65x6275jx-3000.app.github.dev')

const Chat = () => {
	const [isConnected, setIsConnected] = useState(socket.connected);

	useEffect(() => {
		socket.on('connect', () => {
			setIsConnected(true);
		});

		socket.on('disconnect', () => {
			setIsConnected(false);
		});
		socket.on('connect', onConnect);
		socket.on('disconnect', onDisconnect);
		socket.on('foo', onFooEvent);

		return () => {
			socket.off('connect', onConnect);
			socket.off('disconnect', onDisconnect);
			socket.off('foo', onFooEvent);
		};
	}, []);
	return (
		<main>
			<Header />
			<WorkingInProgress />
			<Footer />
		</main>
	)
}

export default Chat
