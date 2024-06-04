import MoneyTransfer from "moneyTransfer/MoneyTransfer";
import {Col, Row} from "antd";
import {useState} from "react";

interface Recipient {
	value: string;
	label: string;
}

interface Transfer {
	recipient: string;
	date: Date;
	sum: string;
}


function Home() {
	const recipients: Array<Recipient> = [
		{ value: 'Иванов Иван', label: 'Иванов Иван' },
		{ value: 'Петров Пётр', label: 'Петров Пётр' },
	];

	const [transfers, setTransfers] = useState<Array<Transfer>>([]);

	const addTransfer = (transfer: Transfer) => {
		setTransfers([...transfers, transfer]);
		alert(JSON.stringify(transfer));
	}


	return (
		<Col xl={20}>
			<Row style={{height: '93vh'}} align="middle" justify="center">
				<MoneyTransfer addTransfer={addTransfer} recipients={recipients}/>
			</Row>
		</Col>
	)
}

export default Home
