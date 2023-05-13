import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const validateInput = () => {
    if (num1.trim() === '' || num2.trim() === '') {
      setError('Please enter both numbers.');
      return false;
    }

    if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
      setError('Please enter valid numbers.');
      return false;
    }

    

    setError('');
    return true;
  };

  const handleAddition = () => {
    if (validateInput()) {
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(`Result: ${sum}`);
    }
  };

  const handleSubtraction = () => {
    if (validateInput()) {
      const difference = parseFloat(num1) - parseFloat(num2);
      setResult(`Result: ${difference}`);
    }
  };

  const handleMultiplication = () => {
    if (validateInput()) {
      const product = parseFloat(num1) * parseFloat(num2);
      setResult(`Result: ${product}`);
    }
  };

  const handleDivision = () => {
    if (validateInput()) {
      if (parseFloat(num2) === 0) {
        setError('Cannot divide by zero.');
        setResult('');
      } else {
        const quotient = parseFloat(num1) / parseFloat(num2);
        setResult(`Result: ${quotient}`);
      }
    }
  };

  return (
    <div>
      <h2>React Calculator</h2>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Num 1"
      /> <br></br>  <br></br>
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Num 2"
      /> <br></br><br></br>
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <p style={{ color: 'green' }}>{result}</p>}
    </div>
  );
};

export default Calculator;
