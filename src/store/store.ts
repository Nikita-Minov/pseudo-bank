
import { createContext, useContext } from "react";
import HistoryStore from "./history.ts";

const store = {
	historyStore: new HistoryStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
	return useContext<typeof store>(StoreContext);
};

export default store;