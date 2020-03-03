import React from 'react';
import { render } from '@testing-library/react';
//import {mount, shallow} from 'enzyme'
import App from './App';

it('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Contact Manager/i);
  expect(linkElement).toBeInTheDocument();

});
