import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

describe('LoginPage', () => {
  it('renders login form and validates input', async () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.getByTestId('form-login')).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('input-email-login'), { target: { value: 'invalid' } });
    fireEvent.change(screen.getByTestId('input-password-login'), { target: { value: '123' } });
    fireEvent.click(screen.getByTestId('btn-submit-login'));
    expect(await screen.findByText(/invalid email address/i)).toBeInTheDocument();
    expect(await screen.findByText(/password must be at least 8 characters/i)).toBeInTheDocument();
  });
}); 