import MoneyTransfer from "moneyTransfer/MoneyTransfer";
import {Col, Row} from "antd";

function Home() {
	return (
		<Col xl={20}>
			<Row style={{height: '93vh'}} align="middle" justify="center">
				<MoneyTransfer/>
			</Row>
		</Col>
	)
}

export default Home
