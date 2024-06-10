import {Button, Card, Col, Input, Row, Space, Typography} from "antd";
import styles from '../assets/styles/pages/friends.module.css';
import user from '../assets/img/user.png';
import {useStore} from "../store/store.ts";
import {Recipient} from "../store/transfer.ts";
import {Link} from "react-router-dom";
import {observer} from "mobx-react";
import {useState} from "react";
const { Title } = Typography;

const Friends = () => {
	const {transferStore, modalsStore} = useStore();
	const transferToFriend = (recipient: Recipient, sum: string) => {
		transferStore.setSum(sum);
		transferStore.setSelectedRecipient(recipient);
	}

	const [name, setName] = useState("");

	const addFriend = (name: string) => {
		if(name.length < 1) {
			modalsStore.setTransferModalActive(true);
			modalsStore.setTransferModalText("Необходимо ввести имя друга в поле!");
			return;
		}
		transferStore.addRecipient(name);
		modalsStore.setTransferModalActive(true);
		modalsStore.setTransferModalText("Друг успешно добавлен!");
	}


	return (
		<Col xl={20}>
			<Row className={styles.friends}>
				{
					transferStore.recipients.map((recipient: Recipient) => (
						<Link to={'/'} onClick={() => transferToFriend(recipient, '')}>
							<Card
								hoverable
								style={{width: 250, height: 350}}
								cover={<img alt="profile" src={user}/>}
								key={recipient.label}
							>
								<p className={styles.friends__card__username}>{recipient.label}</p>
							</Card>
						</Link>
					))
				}
			</Row>
			<Row className={styles.friends__addForm}>
				<Title level={4}>Добавить друга</Title>
				<Space.Compact style={{ width: '100%' }}>
					<Input
						style={{border: '1px solid #061178'}}
						placeholder="Введите имя друга"
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<Button
						style={{backgroundColor: '#061178', fontSize: "15px", color: '#ffffff', border: 'none'}}
						type="primary"
						onClick={() => addFriend(name)}
					>Добавить</Button>
				</Space.Compact>
			</Row>
		</Col>
	)
}

export default observer(Friends);