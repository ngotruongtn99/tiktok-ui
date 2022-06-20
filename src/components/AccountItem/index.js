import React from "react";
import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/150d740cf8e32d245ac245391185db8c~c5_100x100.jpeg?x-expires=1655866800&x-signature=3aPu1EA6LocENE3FQAX7ABWQDWs%3D'
        alt='Linhh'
        className={cx("avatar")}
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Thùy Linh</span>
          <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>thuilingg</span>
      </div>
    </div>
  );
}

export default AccountItem;
