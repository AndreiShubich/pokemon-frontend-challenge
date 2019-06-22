import React, { useState, useCallback } from 'react';
import { LIST_ITEMS_LIMIT } from 'constants/limits';
import PokemonsList from 'components/PokemonsList';

const App: React.FC = () => {
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

  return (
    <div>
      <PokemonsList offset={offset} limit={LIST_ITEMS_LIMIT} />
      <section>
        <button type="button" disabled={offset === 0} onClick={handlePrevClick}>Prev</button>
        <button type="button" onClick={handleNextClick}>Next</button>
      </section>
    </div>
  );
};

export default App;
