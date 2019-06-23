import React, { HTMLAttributes, useMemo } from 'react';
import classNames from 'classnames';

import './Badge.scss';

const Badge: React.FC<{
  children: string;
  color?: string;
  backgroundColor?: string;
  volume?: boolean;
} & HTMLAttributes<HTMLSpanElement>> = ({
  children, color, backgroundColor, volume, className,
}) => {
  const badgeClassName = useMemo(() => classNames('Badge', className, {
    Badge_volume: volume,
  }), [className, volume]);

  return (
    <span
      style={{ color, backgroundColor }}
      className={badgeClassName}
    >
      {children}

    </span>
  );
};

export default React.memo(Badge);
