import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary-50">
      <h1 className="text-6xl font-bold text-red-600 mb-4" data-testid="notfound-title">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-secondary-900 mb-8" data-testid="notfound-message">
        Page Not Found
      </h2>
      <Button 
        variant="primary" 
        onClick={() => navigate('/')} 
        data-testid="btn-go-home"
      >
        Go Home
      </Button>
    </div>
  );
};

export default NotFoundPage; 