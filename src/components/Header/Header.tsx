import { Avatar, Col, Flex, Row } from "antd";
import styles from "../../assets/styles/components/header.module.css";
import { Link } from "react-router-dom";
import AvatarIcon from "./AvatarIcon.tsx";
import logoutSvg from "../../assets/img/logout.svg";
import { CustomIconComponentProps } from "@ant-design/icons/es/components/Icon";
import Icon from "@ant-design/icons";

const LogoutSvg = () => <img src={logoutSvg} alt="" />;
const LogoutIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={LogoutSvg} {...props} />
);

const Header = () => {
  return (
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
          <Avatar size={48} icon={<AvatarIcon />} />
          <span className={styles.header__logout}>
            <LogoutIcon />
          </span>
        </Flex>
      </Col>
    </Row>
  );
};

export default Header;
