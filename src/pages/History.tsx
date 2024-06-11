import { Col, Row, Space, Table } from "antd";
import { observer } from "mobx-react";
import { useStore } from "../store/store.ts";
import { Link } from "react-router-dom";
import { Recipient } from "../store/transfer.ts";
import { numberToString } from "../utils/numberToString.ts";
import styles from "../assets/styles/pages/history.module.css";

const History = () => {
  const { historyStore, transferStore } = useStore();

  const dataSource = [];

  const repeatTransfer = (recipient: Recipient, sum: number) => {
    transferStore.setSum(sum);
    transferStore.setSelectedRecipient(recipient);
  };

  historyStore.transfers.forEach((transfer, index) => {
    dataSource.push({
      key: `${index}`,
      recipient: transfer.recipient,
      date: transfer.date,
      sum: transfer.sum,
    });
  });

  const columns = [
    {
      title: "Получатель",
      dataIndex: "recipient",
      key: "recipient",
    },
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Сумма",
      key: "sum",
      render: (_, record) => <>{numberToString(record.sum.toString())}</>,
    },
    {
      title: "Действие",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            onClick={() =>
              repeatTransfer(
                { value: record.recipient, label: record.recipient },
                record.sum,
              )
            }
            to={"/"}
          >
            Повторить
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <Col xl={20}>
      <Row className={styles.history} align="middle" justify="center">
        <Table
          dataSource={dataSource}
          className={styles.historyTable}
          pagination={{ pageSize: 30 }}
          scroll={{ y: 500 }}
          columns={columns}
        />
        ;
      </Row>
    </Col>
  );
};

export default observer(History);
