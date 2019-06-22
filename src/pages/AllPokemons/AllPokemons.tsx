import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { LIST_ITEMS_LIMIT } from 'constants/limits';
import AllPokemonsContainer from 'containers/AllPokemonsContainer';
import PokemonContainer from 'containers/PokemonContainer';
import PokemonCard from 'components/PokemonCard';

import './AllPokemons.scss';

const AllPokemons: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);

  const handleNextClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setOffset(offset + LIST_ITEMS_LIMIT);
    }, [offset],
  );

  const handlePrevClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setOffset(offset - LIST_ITEMS_LIMIT);
    }, [offset],
  );

  const renderPokemon = useCallback((name: string) => (
    <PokemonContainer key={name} name={name}>
      {(isLoading, pokemon) => (
        <Link to={`pokemon/${name}`}>
          <PokemonCard name={name} pokemon={pokemon} />
        </Link>
      )}
    </PokemonContainer>
  ), []);

  return (
    <div className="AllPokemons">
      <AllPokemonsContainer offset={offset} limit={LIST_ITEMS_LIMIT}>
        {(isLoading, {
          count, results, next, previous,
        }) => (
          <div>
            <section className="AllPokemons-List">
              {results.map(({ name }) => renderPokemon(name))}
            </section>
            <nav className="AllPokemons-Nav">
              <button disabled={isLoading || !previous} onClick={handlePrevClick}>Prev</button>
              <button disabled={isLoading || !next} onClick={handleNextClick}>Next</button>
            </nav>
          </div>
        )}
      </AllPokemonsContainer>
    </div>
  );
};

export default AllPokemons;
