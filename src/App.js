import { BrowserRouter } from "react-router-dom";

import MainRoute from "./routes/MainRoute";
import FlexCom from "./components/FlexCom";

import { UserProvider } from "./context/UserContext";

const App = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<FlexCom
					flexDirection="column"
					marginning="10vh 0 10vh 0"
					alignItems="center"
					justifyContent="center"
				>
					<MainRoute />
				</FlexCom>
			</UserProvider>
		</BrowserRouter>
	);
};

export default App;
