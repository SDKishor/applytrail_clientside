import { SignIn } from '@clerk/clerk-react';

export const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn signUpUrl="/signup" forceRedirectUrl="/dashboard" />
    </div>
  );
};
