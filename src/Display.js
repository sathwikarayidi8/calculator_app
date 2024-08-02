import React from 'react';
import './Display.css';

const Display = ({ input, result }) => {
  return (
    <div className="display">
      <div className="input">{input}</div>
      {result !== null && <div className="result">{result}</div>}
    </div>
  );
};

export default Display;
