import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';
import Display from './Display';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const handleEqual = () => {
    try {
      setResult(eval(input)); // eval is used here for simplicity, but not recommended for production
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        <Button onClick={handleClear} value="C" />
        <Button onClick={handleButtonClick} value="/" />
        <Button onClick={handleButtonClick} value="*" />
        <Button onClick={handleButtonClick} value="-" />
        <Button onClick={handleButtonClick} value="7" />
        <Button onClick={handleButtonClick} value="8" />
        <Button onClick={handleButtonClick} value="9" />
        <Button onClick={handleButtonClick} value="+" />
        <Button onClick={handleButtonClick} value="4" />
        <Button onClick={handleButtonClick} value="5" />
        <Button onClick={handleButtonClick} value="6" />
        <Button onClick={handleButtonClick} value="1" />
        <Button onClick={handleButtonClick} value="2" />
        <Button onClick={handleButtonClick} value="3" />
        <Button onClick={handleEqual} value="=" />
        <Button onClick={handleButtonClick} value="0" />
        <Button onClick={handleButtonClick} value="." />
      </div>
    </div>
  );
};

export default Calculator;
