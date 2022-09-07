import React from 'react';
import '../App.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = (e) => {
    if (!e.target.name) return;

    const { next, total, operation } = calculate(this.state, e.target.name);

    if (next === null && total === null) {
      this.setState({ next, total: '0', operation });
    } else {
      this.setState({ next, total, operation });
    }
  };

  render() {
    const { next, total } = this.state;
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
      <div className="calculator-grid">
        {next ? (
          <div className="operand">
            {next}
          </div>
        ) : (
          <div className="operand">
            {total}
          </div>
        )}

        { button.map((buttonSymbol) => (
          <button
            onClick={(e) => this.onClickHandler(e)}
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
    );
  }
}

export default Calculator;
