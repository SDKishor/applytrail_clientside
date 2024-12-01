import { SignUp } from '@clerk/clerk-react';

export const Signup = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp signInUrl="/login" />
    </div>
  );
};
