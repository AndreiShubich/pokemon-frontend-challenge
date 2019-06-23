import React from 'react';
import classNames from 'classnames';

import './PokemonSection.scss';

const PokemonSection: React.FC<{
  title: string;
  isMain?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({
  title, isMain, className, children,
}) => {
  const sectionClassName = classNames('PokemonSection', className);

  const headerClassName = classNames('PokemonSection-Header', {
    'PokemonSection-Header_main': isMain,
  });

  return (
    <section className={sectionClassName}>
      <header className={headerClassName}>
        {title}
      </header>
      {children}
    </section>
  );
};

export default PokemonSection;
