import React from 'react';
import { PageHeader } from '../components/PageHeader';

const Login: React.FC = () => {
  return (
    <div>
      <PageHeader title="Login" breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Login' }]} />
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-secondary-600">Login page coming soon...</p>
      </div>
    </div>
  );
};

export default Login;
