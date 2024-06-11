import { makeAutoObservable } from "mobx";

export interface Transfer {
  recipient: string;
  date: string;
  sum: number;
}

class HistoryStore {
  transfers: Transfer[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTransfer(transfer: Transfer) {
    console.log(transfer);
    this.transfers.push(transfer);
  }

  setHistory(history: Transfer[]) {
    this.transfers = history;
  }
}

export default HistoryStore;
