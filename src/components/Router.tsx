import {Outlet} from "react-router-dom";
import {Row} from "antd";
import Header from "./Header/Header.tsx";
import NavBar from "./Navbar/Navbar.tsx";



const Router = () => {
	return (
		<>
			<Header/>
			<Row>
				<NavBar/>
				<Outlet/>
			</Row>
		</>
	)
}

export default Router;