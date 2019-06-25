import React, { HTMLAttributes, useMemo } from 'react';
import classNames from 'classnames';
import { PokemonTypeName } from 'types/pokemonTypes';
import { TYPE_COLOR_MAP } from 'constants/colors';
import Badge from 'components/Badge';

const PokemonTypeBadge: React.FC<{
  children: string;
  typeName: PokemonTypeName;
  filling?: boolean;
  volume?: boolean;
} & HTMLAttributes<HTMLSpanElement>> = ({
  children, typeName, filling, volume, className,
}) => {
  const badgeClassName = useMemo(() => classNames('PokemonTypeBadge', className, {
  }), [className]);

  const colorProps = useMemo(() => {
    const typeColor = TYPE_COLOR_MAP[typeName];

    if (filling) {
      return { backgroundColor: typeColor, color: 'white' };
    }

    return { color: typeColor };
  }, [filling, typeName]);

  return (
    <Badge
      className={badgeClassName}
      volume={volume}
      {...colorProps}
    >
      {children}
    </Badge>
  );
};

export default React.memo(PokemonTypeBadge);
