import React, { useMemo } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import usePokemon from 'hooks/usePokemon';
import getPokemonColor from 'utils/getPokemonColor';
import PokemonSection from './components/PokemonSection';
import PokemonBasicInfo from './components/PokemonBasicInfo';

import './Pokemon.scss';

const Pokemon: React.FC<
  RouteComponentProps<{
    nameOrId: string
  }>
> = ({
  match,
}) => {
  const nameOrId = useMemo(() => match.params.nameOrId, [match.params.nameOrId]);
  const { isLoading, pokemon } = usePokemon(nameOrId);

  if (isLoading || !pokemon) return null;

  const pokemonColor = getPokemonColor(pokemon);

  return (
    <main className="Pokemon" style={{ background: pokemonColor }}>
      <div className="Pokemon-Body">
        <PokemonSection title={pokemon.name} isMain>
          <PokemonBasicInfo pokemon={pokemon} />
        </PokemonSection>
        <PokemonSection className="Pokemon-RegularSection" title="Profile">{null}</PokemonSection>
        {/* <PokemonSection title="Damage When Attacked">{null}</PokemonSection> */}
        <PokemonSection className="Pokemon-RegularSection" title="Evolutions">{null}</PokemonSection>
        <PokemonSection className="Pokemon-RegularSection" title="Moves">{null}</PokemonSection>
      </div>
    </main>
  );
};

export default React.memo(Pokemon);
