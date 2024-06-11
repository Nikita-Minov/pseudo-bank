import { Outlet } from "react-router-dom";
import { Row } from "antd";
import Header from "./Header/Header.tsx";
import NavBar from "./Navbar/Navbar.tsx";
import TransferModal from "./TransferModal.tsx";
import { observer } from "mobx-react";
import recipients from "./../mocks/recipients.json";
import history from "./../mocks/history.json";
import { useStore } from "../store/store.ts";

const Router = () => {
  const { transferStore, historyStore } = useStore();

  transferStore.setRecipients(recipients || []);
  historyStore.setHistory(history || []);

  return (
    <>
      <Header />
      <Row>
        <NavBar />
        <Outlet />
      </Row>
      <TransferModal />
    </>
  );
};

export default observer(Router);
