import styles from '../../assets/styles/components/navbar.module.css';
import {Col, Row} from "antd";
import {Link} from "react-router-dom";

const NavBar = () => {
	return (
		<>
		<Col xl={4}>
			<div className={styles.navbar}>
					<div className={styles.navbar__balanceBlock}>
						<Row justify="center">
							<p className={styles.navbar__balanceBlock__value}>
								100 500.00
							</p>
							<p className={styles.navbar__text}>
								Остаток средств
							</p>
						</Row>
					</div>
				<div className={styles.navbar__balanceBlock}>
					<Row justify="center">
						<Link to='/' className={styles.navbar__link}>
							Перевести
						</Link>
						<Link to='/' className={styles.navbar__link}>
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

export default NavBar;