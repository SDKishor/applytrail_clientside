import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  children: React.ReactNode;
};

const ProtectedRoute = ({ isAuthenticated, children }: ProtectedRouteProps) => {
  return isAuthenticated ? (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to="/login" replace />
      </SignedOut>
    </>
  ) : (
    <Navigate to="/login" replace /> // Redirect to login
  );
};

export default ProtectedRoute;
