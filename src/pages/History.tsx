import {Col, Row, Space, Table} from "antd";
import React from "react";

const History = () => {


	const dataSource = [];

	for(let i = 0; i < 100; i++) {
		dataSource.push(	{
			key: `${i}`,
			recipient: 'Иванов Иван',
			date: '21.05.2024',
			sum: '10.000',
		});
	}

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

export default History;