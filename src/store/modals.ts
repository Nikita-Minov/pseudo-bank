import {makeAutoObservable} from "mobx";


class ModalsStore {

	isTransferModalActive: boolean = false;
	transferModalText: string = "";

	constructor() {
		makeAutoObservable(this)
	}

	setTransferModalActive(value: boolean) {
		this.isTransferModalActive = value;
	}

	setTransferModalText(newText: string) {
		this.transferModalText = newText;
	}
}


export default ModalsStore;