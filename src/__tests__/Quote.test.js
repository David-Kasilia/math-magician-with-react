import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('Unit Test Check For Quote Component', () => {
  render(<Quote />);
  const linkElement = screen.getByText(/Mathematics is about numbers/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Unit Test For Quote component', () => {
  it('Quote Component renders correctly', () => {
    const tree = TestRenderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
