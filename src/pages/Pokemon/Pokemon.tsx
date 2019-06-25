import React, { useMemo, HTMLAttributes } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import usePokemon from 'hooks/usePokemon';
import usePokemonSpecies from 'hooks/usePokemonSpecies';
import getPokemonBackground from 'utils/getPokemonBackground';
import StyledLink from 'components/StyledLink';
import PokemonSection from './components/PokemonSection';
import PokemonBasicInfo from './components/PokemonBasicInfo';
import PokemonProfile from './components/PokemonProfile';
import PokemonEvolution from './components/PokemonEvolution';
import PokemonMoves from './components/PokemonMoves';

import './Pokemon.scss';

const PokemonWrapper: React.FC<
  HTMLAttributes<HTMLElement>
> = ({ children, style }) => (
  <main className="Pokemon" style={style}>
    <StyledLink className="Pokemon-Close" to="/">X</StyledLink>
    {children}
  </main>
);

const Pokemon: React.FC<
  RouteComponentProps<{
    nameOrId: string
  }>
> = ({
  match,
}) => {
  const nameOrId = useMemo(() => match.params.nameOrId, [match.params.nameOrId]);
  const { isLoading: isPokemonLoading, pokemon } = usePokemon(nameOrId);
  const { isLoading: isPokemonSpeciesLoading, pokemonSpecies } = usePokemonSpecies(nameOrId);

  if (isPokemonLoading
    || isPokemonSpeciesLoading
    || !pokemon
    || !pokemonSpecies
  ) return <PokemonWrapper />;

  const pokemonBackground = getPokemonBackground(pokemon);

  return (
    <PokemonWrapper style={{ background: pokemonBackground }}>
      <div className="Pokemon-Body">
        <PokemonSection title={pokemon.name} isMain>
          <PokemonBasicInfo pokemon={pokemon} />
        </PokemonSection>

        <PokemonSection className="Pokemon-RegularSection" title="Profile">
          <PokemonProfile pokemon={pokemon} pokemonSpecies={pokemonSpecies} />
        </PokemonSection>

        <PokemonSection className="Pokemon-RegularSection" title="Evolutions">
          <PokemonEvolution pokemonSpecies={pokemonSpecies} />
        </PokemonSection>

        <PokemonSection className="Pokemon-RegularSection" title="Moves">
          <PokemonMoves pokemon={pokemon} />
        </PokemonSection>
      </div>
    </PokemonWrapper>
  );
};

export default React.memo(Pokemon);
