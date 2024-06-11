import { createContext, useContext } from "react";
import HistoryStore from "./history.ts";
import TransferStore from "./transfer.ts";
import ProfileStore from "./profile.ts";
import ModalsStore from "./modals.ts";

const store = {
  historyStore: new HistoryStore(),
  transferStore: new TransferStore(),
  profileStore: new ProfileStore(),
  modalsStore: new ModalsStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
