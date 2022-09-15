import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

test('Unit Test Check For Calculator Component', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/Let us do some math/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Unit Test For Calculator component', () => {
  it('Calculator Component renders correctly', () => {
    const tree = TestRenderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
