import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  onlyOutline = false,
  rounded = false,
  disable = false,
  small = false,
  large = false,
  leftIcon = false,
  rightIcon = false,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  // Remove event listener from disable button
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }
  if (to) {
    Comp = Link;
    props.to = to;
  } else if (href) {
    Comp = "a";
    props.href = href;
  }
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    onlyOutline,
    rounded,
    disable,
    large,
    small,
    leftIcon,
    rightIcon,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  onlyOutline: PropTypes.bool,
  rounded: PropTypes.bool,
  disable: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
