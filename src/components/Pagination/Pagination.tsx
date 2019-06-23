import React, { useMemo, HTMLAttributes, useCallback } from 'react';
import classNames from 'classnames';
import {
  getCurrentPageNumber,
  getNumberOfPages,
  getNextPageNumber,
  getPrevPageNumber,
} from './utils';

import './Pagination.scss';

const Pagination: React.FC<{
  count: number;
  limit: number;
  offset: number;
  setOffset: (offset: number) => void;
} & HTMLAttributes<HTMLElement>> = ({
  count,
  limit,
  offset,
  setOffset,
  className,
}) => {
  const numberOfPages = useMemo(() => getNumberOfPages(count, limit), [count, limit]);
  const currentPageNumber = useMemo(() => getCurrentPageNumber(offset, limit), [offset, limit]);
  const nextPageNumber = useMemo(
    () => getNextPageNumber(currentPageNumber, numberOfPages), [currentPageNumber, numberOfPages],
  );
  const afterNextPageNumber = useMemo(
    () => getNextPageNumber(nextPageNumber, numberOfPages), [nextPageNumber, numberOfPages],
  );
  const prevPageNumber = useMemo(() => getPrevPageNumber(currentPageNumber), [currentPageNumber]);
  const beforePrevPageNumber = useMemo(() => getPrevPageNumber(prevPageNumber), [prevPageNumber]);

  const visiblePages = useMemo(() => {
    const result: number[] = [];

    if (prevPageNumber) {
      result.push(prevPageNumber);

      if (currentPageNumber === numberOfPages) {
        if (beforePrevPageNumber) {
          result.push(beforePrevPageNumber);
        }
      }
    }

    result.push(currentPageNumber);

    if (nextPageNumber) {
      result.push(nextPageNumber);

      if (!prevPageNumber) {
        if (afterNextPageNumber) {
          result.push(afterNextPageNumber);
        }
      }
    }

    return result;
  }, [
    afterNextPageNumber,
    beforePrevPageNumber,
    currentPageNumber,
    nextPageNumber,
    numberOfPages,
    prevPageNumber,
  ]);

  const handlePageClick = useCallback((pageNumber: number) => {
    setOffset(limit * (pageNumber - 1));
  }, [limit, setOffset]);

  const paginationClassName = useMemo(() => classNames('Pagination', className), [className]);

  return (
    <nav className={paginationClassName}>
      <ul className="Pagination-List">
        <li
          className={
            classNames(
              'Pagination-Page',
              {
                'Pagination-Page_possible': prevPageNumber !== null,
                'Pagination-Page_disabled': prevPageNumber === null,
              },
            )
          }
          onClick={() => { handlePageClick(1); }}
        >
          &lt;&lt;
        </li>
        {
          visiblePages.map(
            pageNumber => (
              <li
                key={pageNumber}
                className={
                  classNames(
                    'Pagination-Page',
                    {
                      'Pagination-Page_active': pageNumber === currentPageNumber,
                      'Pagination-Page_possible': pageNumber !== currentPageNumber,
                    },
                  )
                }
                onClick={() => { handlePageClick(pageNumber); }}
              >
                {pageNumber}
              </li>
            ),
          )
        }
        <li
          className={
            classNames(
              'Pagination-Page',
              {
                'Pagination-Page_possible': nextPageNumber !== null,
                'Pagination-Page_disabled': nextPageNumber === null,
              },
            )
          }
          onClick={() => { handlePageClick(numberOfPages); }}
        >
          &gt;&gt;
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(Pagination);
