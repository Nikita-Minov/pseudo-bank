import {Col, Row, Space, Table} from "antd";
import {observer} from "mobx-react";
import {useStore} from "../store/store.ts";

const History = () => {

	//const history = new HistoryStore()

	const { historyStore } = useStore();

	const dataSource = [];

	historyStore.transfers.forEach((transfer, index) => {
		dataSource.push(	{
			key: `${index}`,
			recipient: transfer.recipient,
			date: transfer.date.toFormat('dd.LL.yyyy'),
			sum: transfer.sum,
		});
	})

	const columns = [
		{
			title: 'Получатель',
			dataIndex: 'recipient',
			key: 'recipient',
		},
		{
			title: 'Дата',
			dataIndex: 'date',
			key: 'date',
		},
		{
			title: 'Сумма',
			dataIndex: 'sum',
			key: 'sum',
		},
		{
			title: 'Действие',
			key: 'action',
			render: () => (
				<Space size="middle">
					<a>Повторить</a>
				</Space>
			),
		},
	];




	return (
		<Col xl={20}>
			<Row style={{height: '93vh'}} align="middle" justify="center">
				<Table
					dataSource={dataSource}
					style={{width: '70%', border: '1px solid #ccd5e8', borderRadius: '5px' }}
					pagination={{ pageSize: 30}}
					scroll={{ y: 500 }}
					columns={columns} />;
			</Row>
		</Col>
	)
}

export default observer(History);