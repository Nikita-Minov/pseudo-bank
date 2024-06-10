import {makeAutoObservable} from "mobx";


export interface Recipient {
	value: string;
	label: string;
}

class TransferStore {
	recipients: Array<Recipient> = [
		{ value: 'Иванов Иван', label: 'Иванов Иван' },
		{ value: 'Петров Пётр', label: 'Петров Пётр' },
	];

	selectedRecipient: Recipient = {
		value: '',
		label: '',
	}

	sum = '';

	constructor() {
		makeAutoObservable(this)
	}

	setSum(sum: string) {
		this.sum = sum;
	}

	setSelectedRecipient(recipient: Recipient) {
		this.selectedRecipient = recipient;
	}
}


export default TransferStore;