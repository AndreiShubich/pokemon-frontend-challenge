import React, { useCallback } from 'react';
import { IPokemonSpecies } from 'types/pokemonSpeciesTypes';
import useEvolutionChain from 'hooks/useEvolutionChain';
import { IChainLink } from 'types/evolutionChainTypes';
import PokemonContainer from 'containers/PokemonContainer';
import PokemonCard from 'components/PokemonCard';
import StyledLink from 'components/StyledLink';

import './PokemonEvolution.scss';

const PokemonEvolution: React.FC<{
  pokemonSpecies: IPokemonSpecies;
}> = ({ pokemonSpecies }) => {
  const { isLoading, evolutionChain } = useEvolutionChain(
    pokemonSpecies.evolution_chain.url,
  );

  const getFlatChain = useCallback((chain: IChainLink): string[] => {
    if (chain.evolves_to.length) {
      return [chain.species.name, ...getFlatChain(chain.evolves_to[0])];
    }

    return [chain.species.name];
  }, []);

  if (isLoading || !evolutionChain) return null;

  return (
    <div className="PokemonEvolution">
      {
        getFlatChain(evolutionChain.chain).map((name, index, arr) => (
          <PokemonContainer key={name} name={name}>
            {
              (isPokemonLoading, pokemon) => pokemon && (
              <>
                <StyledLink to={`/pokemon/${name}`} className="PokemonEvolution-PokemonLink">
                  <PokemonCard pokemon={pokemon} />
                </StyledLink>
                {index + 1 !== arr.length && <span className="PokemonEvolution-Arrow">🡆</span>}
              </>
              )
            }
          </PokemonContainer>
        ))
      }
    </div>
  );
};

export default React.memo(PokemonEvolution);
