import {Outlet} from "react-router-dom";
import {Col, Row} from "antd";
import Header from "./Header/Header.tsx";



const Router = () => {
	return (
		<>
			<Header/>
			<Row>
				<Col xl={4}>
					NavBar
				</Col>
				<Col xl={20}>
					<h1>Body</h1>
					<Outlet/>
				</Col>
			</Row>
		</>
	)
}

export default Router;