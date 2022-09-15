import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Home from '../components/Home';

test('Unit Test Check For Home Component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome To Our Page/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Unit Test For  Home component', () => {
  it('Home Component renders correctly', () => {
    const tree = TestRenderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
