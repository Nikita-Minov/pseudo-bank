
import { createContext, useContext } from "react";
import HistoryStore from "./history.ts";
import TransferStore from "./transfer.ts";

const store = {
	historyStore: new HistoryStore(),
	transferStore: new TransferStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
	return useContext<typeof store>(StoreContext);
};

export default store;