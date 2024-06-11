import { makeAutoObservable } from "mobx";

class ProfileStore {
  balance = 10000000;

  constructor() {
    makeAutoObservable(this);
  }

  setBalance(newBalance: number): void {
    this.balance = newBalance;
  }
}

export default ProfileStore;
