import React, { HTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames';

import './StyledLink.scss';

const StyledLink: React.FC<{
  unstyled?: boolean;
} & LinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
  className,
  unstyled = true,
  ...linkProps
}) => {
  const linkClassName = classNames('StyledLink', className, {
    StyledLink_unstyled: unstyled,
  });

  return <Link className={linkClassName} {...linkProps} />;
};

export default StyledLink;
