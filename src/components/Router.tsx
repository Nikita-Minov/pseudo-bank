import {Outlet} from "react-router-dom";
import {Row} from "antd";
import Header from "./Header/Header.tsx";
import NavBar from "./Navbar/Navbar.tsx";
import TransferModal from "./TransferModal.tsx";
import {observer} from "mobx-react";

const Router = () => {
	return (
		<>
			<Header/>
			<Row>
				<NavBar/>
				<Outlet/>
			</Row>
			<TransferModal/>
		</>
	)
}

export default observer(Router);