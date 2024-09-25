import React from 'react';

const Specs = ({ specs }) => {
  return (
    <div>
      <h3>Specifications</h3>
      <ul>
        {Object.entries(specs).map(([key, value]) => (
          <li key={key}>
            <strong>{key.replace(/([A-Z])/g, ' $1')}: </strong><span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Specs;