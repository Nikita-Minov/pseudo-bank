import styles from '../assets/styles/pages/home.module.css';
import {Col, Row} from "antd";

function Home() {
	return (
		<Col xl={20}>
			<Row align="middle" justify="center">
				<h1 className={styles.title}>Home</h1>
			</Row>
		</Col>
	)
}

export default Home
