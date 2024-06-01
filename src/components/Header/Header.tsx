import {Avatar, Col, Flex, Row} from "antd";
import styles from "../../assets/styles/components/header.module.css";
import {Link} from "react-router-dom";
import AvatarIcon from "./AvatarIcon.tsx";

const Header = () => {
	return (
		<>
			<Row className={styles.header} align="middle">
				<Col xl={20}>
					<Flex justify="center">
						<Link className={styles.header__title} to="/">
							Pseudo Bank
						</Link>
					</Flex>
				</Col>
				<Col xl={4}>
					<Avatar size={48} icon={<AvatarIcon/>} />
				</Col>
			</Row>
		</>
	)
}

export default Header;