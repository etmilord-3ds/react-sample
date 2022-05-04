import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './button';

describe('button', () => {
  const buttonText = 'Some Button';
  it('renders the button with the expected text', () => {
    render(<Button onClick={jest.fn()}>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('calls the correct event when clicked', () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn}>{buttonText}</Button>);
    // proving that it somehow isn't executed on render
    expect(mockFn).not.toHaveBeenCalled();

    // Mocking a user interaction w/ the button
    fireEvent.click(screen.getByText(buttonText));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
