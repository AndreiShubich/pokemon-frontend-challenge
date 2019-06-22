import React, { useMemo } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PokemonContainer from 'containers/PokemonContainer';
import PokemonCard from 'components/PokemonCard';

const Pokemon: React.FC<
  RouteComponentProps<{
    name: string
  }>
> = ({
  match,
}) => {
  const name = useMemo(() => match.params.name, [match.params.name]);

  return (
    <PokemonContainer name={name}>
      {(isLoading, pokemon) => <PokemonCard name={name} pokemon={pokemon} />}
    </PokemonContainer>
  );
};

export default Pokemon;
