import { makeAutoObservable } from "mobx";

export interface Recipient {
  value: string;
  label: string;
}

class TransferStore {
  recipients: Array<Recipient> = [
    { value: "Иванов Иван", label: "Иванов Иван" },
    { value: "Петров Пётр", label: "Петров Пётр" },
  ];

  selectedRecipient: Recipient = {
    value: "",
    label: "",
  };

  sum = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setSum(sum: number) {
    this.sum = sum;
  }

  setSelectedRecipient(recipient: Recipient) {
    this.selectedRecipient = recipient;
  }

  addRecipient(name: string) {
    this.recipients.push({ label: name, value: name });
  }

  setRecipients(recipients: Array<Recipient>) {
    this.recipients = recipients;
  }
}

export default TransferStore;
