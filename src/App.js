// BrowserRouter for routing
import { BrowserRouter } from "react-router-dom";

// this is mainRoute component which have all the routes
import MainRoute from "./routes/MainRoute";

// FlexCom component which is a component I made to use flex on child components like flexDirection="column"
// like flexDirection="column" which will center all the child components
// FlexCom file is in src -> component folder
import FlexCom from "./components/FlexCom";

// Context Provider for all the contexts
// UserProvider file is in  src -> context folder in which i have used createContext , useContext hooks
import { UserProvider } from "./context/UserContext";

// main app which have all the child components
// ---------------------------------------------- component Starts ---------------------------------------------------
const App = () => {
	// I have disabled warnings because those are dependence warning and those dependences are on my according
	// comment line 12 to see warnings
	console.warn = () => {};
	console.log("comment line 12 to see warnings to see all the warnings");

	return (
		// BrowserRouter is used for routing all the child components
		<BrowserRouter>
			{/*UserProvider context is used so that all the states , properties and method from it */}
			{/* can be used in child components */}
			<UserProvider>
				{/* FlexCom is used so that child components render acoording to it */}
				<FlexCom
					forReRendering="app"
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
// ---------------------------------------------- component Ends ---------------------------------------------------

export default App;
