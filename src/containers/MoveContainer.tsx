import React from 'react';
import { IMove } from 'types/moveTypes';
import useMove from 'hooks/useMove';

const MoveContainer: React.FC<{
  name: string,
  children: (isLoading: boolean, move?: IMove) => React.ReactNode;
}> = ({
  name,
  children,
}) => {
  const { isLoading, move } = useMove(name);

  return (
    <>
      {children(isLoading, move)}
    </>
  );
};

export default React.memo(MoveContainer);
