import { AuthProvider } from "./AuthProvider"
import { PetsProvider } from "./PetsProvider"

const AppProvider = ({ children }) => {
	return (
		<AuthProvider>
			<PetsProvider>{children}</PetsProvider>
		</AuthProvider>
	)
}

export default AppProvider
