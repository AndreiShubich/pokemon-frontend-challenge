import React from 'react';

import './Filter.scss';
import classNames from 'classnames';

const Filter: React.FC<{
  name: string;
  values: string[];
  activeValue: string;
  onSetValue: (value: string) => void;
}> = ({
  name,
  values,
  activeValue,
  onSetValue,
}) => (
  <nav className="Filter">
    <strong className="Filter-Name">{`Filter by ${name}: `}</strong>
    <ul className="Filter-List">
      {
        values.map(value => (
          <li
            key={value}
            className={classNames('Filter-Item', {
              'Filter-Item_active': value === activeValue,
            })}
            // https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578
            onClick={() => { onSetValue(value); }}
          >
            {value}
          </li>
        ))
      }
    </ul>
  </nav>
);

export default Filter;
