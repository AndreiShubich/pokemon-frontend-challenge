import React from 'react';

const Badge: React.FC<{
  children: string;
  color?: string;
}> = ({ children, color }) => <span style={{ color }}>{children}</span>;

export default Badge;
