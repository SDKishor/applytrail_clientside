import { SignIn, useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { isSignedIn, getToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleSignIn = async () => {
      if (isSignedIn) {
        try {
          // Fetch the token
          const token = await getToken();
          if (token) {
            // Save the token to localStorage (if needed)
            localStorage.setItem('token', token);
            console.log('Token saved to localStorage:', token);
          }
          // Redirect after sign-in
          navigate('/dashboard');
        } catch (error) {
          console.error('Error during post-sign-in process:', error);
        }
      }
    };

    handleSignIn();
  }, [isSignedIn, getToken, navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn signUpUrl="/signup" forceRedirectUrl="/dashboard" />
    </div>
  );
};
