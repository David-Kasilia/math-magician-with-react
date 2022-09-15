import operate from '../logic/operate';

describe('Unit Test For operate', () => {
  test('test for adding numbers', () => {
    const num1 = 15;
    const num2 = 15;
    const operator = '+';
    const result = operate(num1, num2, operator);
    expect(result).toBe('30');
  });

  test('test for subtracting numbers', () => {
    const num1 = 35;
    const num2 = 15;
    const operator = '-';
    const result = operate(num1, num2, operator);
    expect(result).toBe('20');
  });

  test('test for multiplying numbers', () => {
    const num1 = 5;
    const num2 = 15;
    const operator = 'x';
    const result = operate(num1, num2, operator);
    expect(result).toBe('75');
  });

  test('test for multiplying numbers by zero', () => {
    const num1 = 5;
    const num2 = 0;
    const operator = 'x';
    const result = operate(num1, num2, operator);
    expect(result).toBe('0');
  });

  test('test for dividing numbers', () => {
    const num1 = 35;
    const num2 = 7;
    const operator = '÷';
    const result = operate(num1, num2, operator);
    expect(result).toBe('5');
  });

  test('test for dividing numbers by zero', () => {
    const num1 = 35;
    const num2 = 0;
    const operator = '÷';
    const result = operate(num1, num2, operator);
    expect(result).toBe("Can't divide by 0.");
  });

  test('test for modulo numbers', () => {
    const num1 = 55;
    const num2 = 3;
    const operator = '%';
    const result = operate(num1, num2, operator);
    expect(result).toBe('1');
  });

  test('test for modulo numbers', () => {
    const num1 = 5;
    const num2 = 0;
    const operator = '%';
    const result = operate(num1, num2, operator);
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
});
