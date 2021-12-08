// FlexCom component for using flex direction and other properties
// which are in component
import FlexCom from "../components/FlexCom";

// AddingUser component is used to add users name in database
import AddingUser from "./AddingUser";

// ShowingAllUsers component is used to show all users names from the database
import ShowingAllUsers from "./ShowingAllUsers";

// this is MainPage component which appear when user arrives on the this web
// In this MainPage component we have three child components
// ---------------------------------------------- component Starts ---------------------------------------------------
const MainPage = () => {
	return (
		// 1, FlexCom component which we use for flex direction and other flex properties
		// and so that child component render according to its flex properties
		<FlexCom
			forReRendering="MainPage Component"
			marginning="0 0 10vh 0"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			{/* 2, AddingUser component (which adds users) */}
			<AddingUser />

			{/* 3, ShowingAllUsers component (which shows all users) */}
			<ShowingAllUsers />
		</FlexCom>
	);
};
// ---------------------------------------------- component Ends ---------------------------------------------------

export default MainPage;
