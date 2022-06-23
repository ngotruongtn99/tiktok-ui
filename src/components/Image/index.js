import PropTypes from "prop-types";
import React, { forwardRef, useState } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";
import classNames from "classnames";

const Image = forwardRef(
  (
    {
      className,
      src,
      alt,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        src={fallback || src}
        alt={alt}
        className={classNames(styles.wrapper, className)}
        {...props}
        ref={ref}
        onError={handleError}
      />
    );
  }
);
Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
};
export default Image;
