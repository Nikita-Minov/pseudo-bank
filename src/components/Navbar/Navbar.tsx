import styles from '../../assets/styles/components/navbar.module.css';
import {Col, Row} from "antd";
import {Link} from "react-router-dom";
import {useStore} from "../../store/store.ts";
import {observer} from "mobx-react";
import {numberToString} from "../../utils/numberToString.ts";

const NavBar = () => {

	const { profileStore } = useStore();

	return (
		<>
		<Col xl={4}>
			<div className={styles.navbar}>
					<div className={styles.navbar__balanceBlock}>
						<Row justify="center">
							<p className={styles.navbar__balanceBlock__value}>
								{numberToString(profileStore.balance.toString())}
							</p>
							<p className={styles.navbar__text}>
								Остаток средств
							</p>
						</Row>
					</div>
				<div className={styles.navbar__balanceBlock}>
					<Row justify="center">
						<Link to={'/'} className={styles.navbar__link}>
							Перевести
						</Link>
						<Link to={'/history'} className={styles.navbar__link}>
							История операций
						</Link>
						<Link to='/' className={styles.navbar__link}>
							Список друзей
						</Link>
					</Row>
				</div>
			</div>
		</Col>
		</>
	)
		;
}

export default observer(NavBar);