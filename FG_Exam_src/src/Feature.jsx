import React from 'react';

const Features = ({ features }) => {
  return (
    <div>
      <h3>Key Features</h3>
      <ul>
        {Object.entries(features).map(([key, value]) => (
          <li key={key}>
            <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
