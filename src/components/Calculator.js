import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const onClickHandler = (e) => {
    if (!e.target.name) return;

    const { next, total, operation } = calculate(data, e.target.name);

    if (next === null && total === null) {
      setData({ ...data, total: '0' });
    } else {
      setData({ next, total, operation });
    }
  };

  const { next, total } = data;
  const button = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  return (
    <div className="calculator">
      <h2>Let us do some math</h2>
      <div className="calculator-grid">
        {next ? (
          <div className="operand">{next}</div>
        ) : (
          <div className="operand">{total}</div>
        )}

        {button.map((buttonSymbol) => (
          <button
            onClick={onClickHandler}
            name={buttonSymbol}
            type="button"
            className={`btn ${buttonSymbol === '0' ? 'btn-zero' : ''} 
            ${buttonSymbol === '=' ? 'btn-equal' : ''}
            ${buttonSymbol === '÷' ? 'btn-divide' : ''}
            ${buttonSymbol === 'x' ? 'btn-multiply' : ''}
            ${buttonSymbol === '-' ? 'btn-subtract' : ''}
            ${buttonSymbol === '+' ? 'btn-add' : ''}`}
            key={buttonSymbol}
          >
            {buttonSymbol}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
