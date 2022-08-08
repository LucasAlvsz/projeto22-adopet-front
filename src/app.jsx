import AppProvider from "./providers"
import Router from "./routes"

import Styles from "./Styles"

const App = () => {
	return (
		<AppProvider>
			<Styles />
			<Router />
		</AppProvider>
	)
}

export default App
