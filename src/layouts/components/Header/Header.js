import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGears,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleQuestion,
  faKeyboard,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import Search from "../Search";
import config from "~/config";
import { InboxIcon, MessageIcon, PlusIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Languages",
      data: [
        { type: "language", code: "en", title: "English" },
        { type: "language", code: "vi", title: "Tiếng Việt" },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        console.log(menuItem.code);
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@_lightninggg",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coins",
    },
    {
      icon: <FontAwesomeIcon icon={faGears} />,
      title: "Setting",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo-link")}>
          <img src={images.logo} alt='logo' />
        </Link>

        <Search />

        <div className={cx("actions")}>
          <Button onlyOutline>
            <PlusIcon className='plus-icon' />
            <span>Upload</span>
          </Button>
          {currentUser ? (
            <>
              <Tippy delay={200} content='Message' placement='bottom'>
                <button className={cx("actions-btn")}>
                  <MessageIcon className='message-icon' />
                </button>
              </Tippy>
              <Tippy delay={200} content='Inbox' placement='bottom'>
                <button className={cx("actions-btn", "inbox-icon")}>
                  <InboxIcon />
                  <span className={cx("inbox-notify")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <Button primary>Log in</Button>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src='https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/87090b40251a403929954538fec402f0.jpeg?x-expires=1655953200&x-signature=xMMN9tiFp9er2jI7WhKuSHUvLjM%3D'
                alt=''
                fallback='https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
