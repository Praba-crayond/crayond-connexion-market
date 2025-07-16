import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { loginSchema, LoginFormValues } from '../utils/validation';
import { useAuthStore } from '../stores/auth-store';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { EyeIcon } from '../components/icons/eye-icon';
import { CheckCircleIcon } from '../components/icons/check-circle-icon';
import { ROUTES } from '../constants/routes';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, isLoading, error } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'Kennetallen@connexxionmarkets.com',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data.email, data.password, data.rememberMe);
      navigate(ROUTES.DASHBOARD);
    } catch (err) {
      // Error is handled by the store
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-secondary-100 flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden">
        <div className="flex flex-col justify-center px-12 xl:px-16 relative z-10">
          <div className="max-w-lg">
            <h1 className="text-4xl xl:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
              The first independent secured finance platform
            </h1>
            <h2 className="text-2xl xl:text-3xl font-semibold text-secondary-800 mb-8">
              for both traditional and digital assets
            </h2>
            <p className="text-lg text-secondary-600 mb-12 leading-relaxed">
              Enabling the rapid growth and diversity of liquidity pools and access to new supplies of
              cash and collateral
            </p>
            
            {/* Feature List */}
            <div className="space-y-4">
              <div className="feature-item">
                <CheckCircleIcon className="feature-icon" />
                <span className="text-lg font-medium">Build Connectivity</span>
              </div>
              <div className="feature-item">
                <CheckCircleIcon className="feature-icon" />
                <span className="text-lg font-medium">Futureproof Compliance</span>
              </div>
              <div className="feature-item">
                <CheckCircleIcon className="feature-icon" />
                <span className="text-lg font-medium">Electronify Trades</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-300 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-accent-300 rounded-full animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 right-32 w-16 h-16 bg-secondary-300 rounded-full animate-pulse-slow delay-500"></div>
        </div>
        
        {/* Illustration Placeholder */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-20">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            {/* Bank Building 1 */}
            <rect x="50" y="200" width="80" height="120" fill="currentColor" className="text-primary-400" />
            <rect x="55" y="180" width="70" height="20" fill="currentColor" className="text-primary-500" />
            {/* Columns */}
            <rect x="60" y="200" width="8" height="120" fill="currentColor" className="text-primary-300" />
            <rect x="75" y="200" width="8" height="120" fill="currentColor" className="text-primary-300" />
            <rect x="90" y="200" width="8" height="120" fill="currentColor" className="text-primary-300" />
            <rect x="105" y="200" width="8" height="120" fill="currentColor" className="text-primary-300" />
            
            {/* Bank Building 2 */}
            <rect x="270" y="180" width="80" height="140" fill="currentColor" className="text-primary-400" />
            <rect x="275" y="160" width="70" height="20" fill="currentColor" className="text-primary-500" />
            {/* Columns */}
            <rect x="280" y="180" width="8" height="140" fill="currentColor" className="text-primary-300" />
            <rect x="295" y="180" width="8" height="140" fill="currentColor" className="text-primary-300" />
            <rect x="310" y="180" width="8" height="140" fill="currentColor" className="text-primary-300" />
            <rect x="325" y="180" width="8" height="140" fill="currentColor" className="text-primary-300" />
            
            {/* Coins */}
            <circle cx="80" cy="350" r="15" fill="currentColor" className="text-yellow-400" />
            <circle cx="100" cy="340" r="12" fill="currentColor" className="text-yellow-500" />
            
            {/* Digital Elements */}
            <rect x="180" y="250" width="40" height="40" fill="currentColor" className="text-green-400" />
            <rect x="185" y="255" width="30" height="30" fill="currentColor" className="text-green-500" />
            
            {/* Money Bills */}
            <rect x="320" y="340" width="30" height="20" fill="currentColor" className="text-green-400" rx="2" />
            <rect x="325" y="345" width="20" height="10" fill="currentColor" className="text-green-500" rx="1" />
          </svg>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold text-secondary-900">
                Conne<span className="text-primary-600">X</span>ion
              </span>
              <span className="text-lg font-medium text-secondary-600">Markets</span>
            </div>
          </div>

          {/* Login Form */}
          <div className="card p-8 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-secondary-900 mb-2">Login</h2>
              <p className="text-secondary-600">to access your account</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className="space-y-6"
              data-testid="form-login"
              noValidate
            >
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                error={errors.email?.message}
                data-testid="input-email-login"
                aria-label="Email address"
                {...register('email')}
              />

              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                error={errors.password?.message}
                data-testid="input-password-login"
                aria-label="Password"
                rightIcon={
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="text-secondary-400 hover:text-secondary-600 transition-colors"
                    data-testid="btn-toggle-password"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <EyeIcon open={showPassword} />
                  </button>
                }
                {...register('password')}
              />

              <div className="flex items-center justify-between">
                <Checkbox
                  label="Remember Me"
                  data-testid="checkbox-remember-me"
                  {...register('rememberMe')}
                />
                <button
                  type="button"
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  data-testid="btn-reset-password"
                >
                  Reset password
                </button>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                loading={isLoading}
                data-testid="btn-submit-login"
                aria-label="Sign in to your account"
              >
                Login
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-secondary-500">
                <button
                  type="button"
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  data-testid="btn-login-attempt"
                >
                  //Login attempt
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;