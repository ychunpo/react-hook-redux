import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
<Route path="/react-api" element={<ReactAPI />} />
<Route path="/react-hooks" element={<ReactHooks />} />
<Route path="/react-dnd" element={<BeautDnD />} />
<Route path="/react-mapInput" element={<MapInput />} />