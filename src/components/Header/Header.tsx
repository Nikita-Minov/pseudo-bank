import {Avatar, Col, Flex, Row} from "antd";
import styles from "../../assets/styles/components/header.module.css";
import {Link} from "react-router-dom";
import AvatarIcon from "./AvatarIcon.tsx";
import logoutSvg from '../../assets/img/logout.svg';

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
					<Flex justify="center" align="center">
						<p className={styles.header__username}>Хрячков Никита</p>
						<Avatar size={48} icon={<AvatarIcon/>}/>
						<span className={styles.header__logout} >
							<img src={logoutSvg} alt="logout"/>
						</span>
					</Flex>
				</Col>
			</Row>
		</>
	)
}

export default Header;