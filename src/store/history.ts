import {makeAutoObservable} from "mobx";
import {DateTime} from 'luxon';

export interface ITransfer {
	recipient: string;
	date: DateTime;
	sum: string;
}

class HistoryStore {
	transfers: ITransfer[] = [{
				recipient: 'Иванов Иван',
				date: DateTime.now(),
				sum: '10.000',
			}];

	constructor() {
		makeAutoObservable(this)
	}

	addTransfer(transfer: ITransfer) {
		this.transfers.push(transfer);
	}
}


export default HistoryStore;