import React, { HTMLAttributes, useMemo } from 'react';
import classNames from 'classnames';

const Badge: React.FC<{
  children: string;
  color?: string;
} & HTMLAttributes<HTMLSpanElement>> = ({ children, color, className }) => {
  const badgeClassName = useMemo(() => classNames('Badge', className, {
  }), [className]);

  return <span style={{ color }} className={badgeClassName}>{children}</span>;
};

export default React.memo(Badge);
