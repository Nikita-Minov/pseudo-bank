import { Button, Card, Col, Input, Row, Space, Typography } from "antd";
import styles from "../assets/styles/pages/friends.module.css";
import user from "../assets/img/user.png";
import { useStore } from "../store/store.ts";
import { Recipient } from "../store/transfer.ts";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { useState } from "react";
const { Title } = Typography;

const Friends = () => {
  const { transferStore, modalsStore } = useStore();
  const transferToFriend = (recipient: Recipient, sum: number) => {
    transferStore.setSum(sum);
    transferStore.setSelectedRecipient(recipient);
  };

  const [name, setName] = useState("");

  const addFriend = (name: string) => {
    if (name.length < 1) {
      modalsStore.openTransferModal();
      modalsStore.setTransferModalText("Необходимо ввести имя друга в поле!");
      return;
    }
    transferStore.addRecipient(name);
    modalsStore.openTransferModal();
    modalsStore.setTransferModalText("Друг успешно добавлен!");
  };

  return (
    <Col xl={20}>
      <Row className={styles.friends}>
        {transferStore.recipients.map((recipient: Recipient) => (
          <Link to={"/"} onClick={() => transferToFriend(recipient, 0)}>
            <Card
              hoverable
              className={styles.friendCard}
              cover={<img alt="profile" src={user} />}
              key={recipient.label}
            >
              <p className={styles.friendCard__username}>{recipient.label}</p>
            </Card>
          </Link>
        ))}
      </Row>
      <Row className={styles.addForm}>
        <Title level={4}>Добавить друга</Title>
        <Space.Compact style={{ width: "100%" }}>
          <Input
            className={styles.addForm__input}
            placeholder="Введите имя друга"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Button
            className={styles.addForm__btn}
            type="primary"
            onClick={() => addFriend(name)}
          >
            Добавить
          </Button>
        </Space.Compact>
      </Row>
    </Col>
  );
};

export default observer(Friends);
