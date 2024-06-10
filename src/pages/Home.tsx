import MoneyTransfer from "moneyTransfer/MoneyTransfer";
import {Col, Row} from "antd";
import {ITransfer} from "../store/history.ts";
import {useStore} from "../store/store.ts";
import {observer} from "mobx-react";
import {DateTime} from "luxon";


interface Transfer {
	recipient: string;
	date: DateTime;
	sum: string;
}


interface MoneyTransferProps {
	recipients?: Array<Recipient>;
	addTransfer: (transfer: Transfer) => void;
	recipient: {
		value: string;
		label: string;
	};
	sum: string;
}

interface Recipient {
	value: string;
	label: string;
}


function Home() {

	const { historyStore, transferStore, profileStore, modalsStore } = useStore();

	const addTransfer = (transfer: ITransfer) => {
		if(profileStore.balance < +transfer.sum) {
		 modalsStore.setTransferModalActive(true);
		 modalsStore.setTransferModalText("Недостаточно денег для перевода!");
		} else {
			historyStore.addTransfer(transfer);
			transferStore.setSelectedRecipient({value: '', label: ''});
			transferStore.setSum('');
			profileStore.setBalance(profileStore.balance - +transfer.sum);
			modalsStore.setTransferModalActive(true);
			modalsStore.setTransferModalText("Перевод проведён успешно");
		}
	}

	const ObserveMoneyTransfer = observer(({addTransfer, recipient, recipients, sum}: MoneyTransferProps) => (
		<MoneyTransfer
			addTransfer={addTransfer}
			recipient={recipient}
			recipients={recipients}
			sum={sum}
	/>));


	return (
		<Col xl={20}>
			<Row style={{height: '93vh'}} align="middle" justify="center">
				<ObserveMoneyTransfer addTransfer={addTransfer}
											 recipient={transferStore.selectedRecipient}
											 recipients={transferStore.recipients}
											 sum={transferStore.sum}
				/>
			</Row>
		</Col>
	)
}

export default observer(Home);
