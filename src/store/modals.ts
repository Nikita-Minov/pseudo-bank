import { makeAutoObservable } from "mobx";

class ModalsStore {
  isTransferModalActive: boolean = false;
  transferModalText: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  openTransferModal() {
    this.isTransferModalActive = true;
  }

  closeTransferModal() {
    this.isTransferModalActive = false;
  }

  setTransferModalText(newText: string) {
    this.transferModalText = newText;
  }
}

export default ModalsStore;
