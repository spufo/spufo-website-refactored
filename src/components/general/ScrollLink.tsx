import React from 'react';
import {Link, LinkProps} from "react-router-dom";

interface ScrollLinkProps extends LinkProps {
  onClick?: () => void;
}

const ScrollLink = React.forwardRef<HTMLAnchorElement, ScrollLinkProps>((props, ref) => {
  const { onClick, ...rest } = props;
  
  const handleClick = () => {
    window.scrollTo(0, 0);
    if (onClick) {
      onClick();
    }
  };

  return <Link {...rest} ref={ref} onClick={handleClick}/>;
});

export default ScrollLink;
