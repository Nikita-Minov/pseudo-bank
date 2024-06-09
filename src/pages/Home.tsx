import MoneyTransfer from "moneyTransfer/MoneyTransfer";
import {Col, Row} from "antd";
import {ITransfer} from "../store/history.ts";
import {useStore} from "../store/store.ts";

interface Recipient {
	value: string;
	label: string;
}

function Home() {

	const { historyStore } = useStore();
	const recipients: Array<Recipient> = [
		{ value: 'Иванов Иван', label: 'Иванов Иван' },
		{ value: 'Петров Пётр', label: 'Петров Пётр' },
	];

	const addTransfer = (transfer: ITransfer) => {
		historyStore.addTransfer(transfer);
		alert(JSON.stringify(historyStore.transfers));
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
