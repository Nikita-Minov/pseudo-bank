//import MoneyTransfer from "moneyTransfer/MoneyTransfer";
import { Col, Row } from "antd";
import { useStore } from "../store/store.ts";
import { observer } from "mobx-react";
import { lazy, Suspense } from "react";
import LoadingError from "../components/LoadingError.tsx";
import styles from "../assets/styles/pages/home.module.css";

const MoneyTransfer = lazy(() =>
  import("moneyTransfer/MoneyTransfer").catch(() => {
    return { default: LoadingError };
  }),
);

interface Transfer {
  recipient: string;
  date: string;
  sum: number;
}

interface MoneyTransferProps {
  recipients?: Array<Recipient>;
  addTransfer: (transfer: Transfer) => void;
  recipient: {
    value: string;
    label: string;
  };
  sum: number;
}

interface Recipient {
  value: string;
  label: string;
}

function Home() {
  const { historyStore, transferStore, profileStore, modalsStore } = useStore();

  const addTransfer = (transfer: Transfer) => {
    if (profileStore.balance < transfer.sum) {
      modalsStore.openTransferModal();
      modalsStore.setTransferModalText("Недостаточно денег для перевода!");
    } else {
      historyStore.addTransfer(transfer);
      transferStore.setSelectedRecipient({ value: "", label: "" });
      transferStore.setSum(0);
      profileStore.setBalance(profileStore.balance - transfer.sum);
      modalsStore.openTransferModal();
      modalsStore.setTransferModalText("Перевод проведён успешно");
    }
  };

  const ObserveMoneyTransfer = observer(
    ({ addTransfer, recipient, recipients, sum }: MoneyTransferProps) => (
      <MoneyTransfer
        addTransfer={addTransfer}
        recipient={recipient}
        recipients={recipients}
        sum={sum}
      />
    ),
  );

  return (
    <Col xl={20}>
      <Row className={styles.home} align="middle" justify="center">
        <Suspense fallback={"Загрузка..."}>
          <ObserveMoneyTransfer
            addTransfer={addTransfer}
            recipient={transferStore.selectedRecipient}
            recipients={transferStore.recipients}
            sum={transferStore.sum}
          />
        </Suspense>
      </Row>
    </Col>
  );
}

export default observer(Home);
