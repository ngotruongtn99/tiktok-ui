import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./Account.module.scss";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const { avatar, nickname, full_name, tick } = data;
  return (
    <Link to={`/@${nickname}`} className={cx("wrapper")}>
      <Image src={avatar} alt={full_name} className={cx("avatar")} />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{full_name}</span>
          {tick && (
            <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />
          )}
        </h4>
        <span className={cx("username")}>{nickname}</span>
      </div>
    </Link>
  );
}
AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountItem;
