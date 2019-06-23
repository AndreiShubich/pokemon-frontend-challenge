import React, { useState, useCallback } from 'react';
import { LIST_ITEMS_LIMIT } from 'constants/limits';
import AllPokemonsContainer from 'containers/AllPokemonsContainer';
import PokemonContainer from 'containers/PokemonContainer';
import PokemonCard from 'components/PokemonCard';
import StyledLink from 'components/StyledLink';
import Pagination from 'components/Pagination';

import './AllPokemons.scss';

const AllPokemons: React.FC = () => {
  const [offset, setOffset] = useState<number>(parseInt(sessionStorage.getItem('offset') || '0', 10));

  const handleSetOffset = useCallback((newOffset: number) => {
    sessionStorage.setItem('offset', `${newOffset}`);
    setOffset(newOffset);
  }, []);

  const renderPokemon = useCallback((name: string) => (
    <PokemonContainer key={name} name={name}>
      {(isLoading, pokemon) => !isLoading && pokemon && (
        <StyledLink to={`pokemon/${name}`} className="AllPokemons-PokemonLink">
          <PokemonCard pokemon={pokemon} />
        </StyledLink>
      )}
    </PokemonContainer>
  ), []);

  return (
    <div className="AllPokemons">
      <AllPokemonsContainer offset={offset} limit={LIST_ITEMS_LIMIT}>
        {(isLoading, {
          count, results,
        }) => !isLoading && results && (
          <>
            <section className="AllPokemons-List">
              {results.map(({ name }) => renderPokemon(name))}
            </section>
            <Pagination
              className="AllPokemons-Nav"
              count={count}
              limit={LIST_ITEMS_LIMIT}
              offset={offset}
              setOffset={handleSetOffset}
            />
          </>
        )}
      </AllPokemonsContainer>
    </div>
  );
};

export default React.memo(AllPokemons);
