import React, { useState, useCallback } from 'react';
import { LIST_ITEMS_LIMIT } from 'constants/limits';
import PokemonContainer from 'containers/PokemonContainer';
import PokemonCard from 'components/PokemonCard';
import StyledLink from 'components/StyledLink';
import Pagination from 'components/Pagination';
import Filter from 'components/Filter';
import usePokemonList from 'hooks/usePokemonList';
import { DEFAULT_FILTER_ALL, FILTERS } from './constants';

import './AllPokemons.scss';

const AllPokemons: React.FC = () => {
  const [offset, setOffset] = useState<number>(
    parseInt(
      sessionStorage.getItem('offset') || '0',
      10,
    ),
  );

  const [activeFilter, setActiveFilter] = useState<string>(
    sessionStorage.getItem('filter') || DEFAULT_FILTER_ALL,
  );

  const { pokemonsList, isLoading } = usePokemonList(
    LIST_ITEMS_LIMIT,
    offset,
    activeFilter !== DEFAULT_FILTER_ALL
      ? activeFilter
      : undefined,
  );

  const handleSetOffset = useCallback((newOffset: number) => {
    sessionStorage.setItem('offset', `${newOffset}`);
    setOffset(newOffset);
  }, []);

  const handleSetFilter = useCallback((newFilter: string) => {
    sessionStorage.setItem('filter', `${newFilter}`);
    setActiveFilter(newFilter);
    setOffset(0);
  }, []);

  const renderPokemon = useCallback((name: string) => (
    <PokemonContainer key={name} name={name}>
      {(isPokemonLoading, pokemon) => !isPokemonLoading && pokemon && (
        <StyledLink to={`/pokemon/${name}`} className="AllPokemons-PokemonLink">
          <PokemonCard pokemon={pokemon} />
        </StyledLink>
      )}
    </PokemonContainer>
  ), []);

  return (
    <div className="AllPokemons">
      <Filter
        name="Type"
        values={FILTERS}
        activeValue={activeFilter}
        onSetValue={handleSetFilter}
      />
      {!isLoading && pokemonsList && (
        <section className="AllPokemons-List">
          {pokemonsList.results.map(({ name }) => renderPokemon(name))}
        </section>

      )}
      {pokemonsList
        && (
          <Pagination
            className="AllPokemons-Nav"
            count={pokemonsList.count}
            limit={LIST_ITEMS_LIMIT}
            offset={offset}
            setOffset={handleSetOffset}
          />
        )
      }
    </div>
  );
};

export default React.memo(AllPokemons);
