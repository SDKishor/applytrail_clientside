import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from '../theme/themeModeToggle';
import { useAuth, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isSignedIn } = useAuth();

  return (
    <nav className="font-sen border-b border-primary bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-primary">
            <div className="flex w-8 gap-2 font-heading">
              <img
                className="hidden w-full dark:block"
                src="./logo_light.svg"
                alt="Logo"
              />
              <img
                className="w-full dark:hidden"
                src="./logo_dark.svg"
                alt="Logo"
              />
              ApplyTrail
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-6 md:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition hover:text-primary',
                  isActive ? 'font-bold text-primary' : 'text-muted-foreground'
                )
              }
            >
              Home
            </NavLink>
            {isSignedIn && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition hover:text-primary',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )
                }
              >
                Dashboard
              </NavLink>
            )}
            <NavLink
              to="/Blogs"
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition hover:text-primary',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )
              }
            >
              Blogs
            </NavLink>
            <ModeToggle />
            {!isSignedIn ? (
              <div className="space-x-4">
                <Button asChild variant="outline" size="sm">
                  <NavLink to="/login">Login</NavLink>
                </Button>
                <Button asChild size="sm">
                  <NavLink to="/signup">Sign Up</NavLink>
                </Button>
              </div>
            ) : (
              <UserButton />
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 text-muted-foreground transition hover:text-primary md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="col my-6 flex flex-col items-center space-y-2 md:hidden">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  'block text-sm font-medium transition hover:text-primary',
                  isActive ? 'font-bold text-primary' : 'text-muted-foreground'
                )
              }
            >
              Home
            </NavLink>
            {isSignedIn && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  cn(
                    'block text-sm font-medium transition hover:text-primary',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )
                }
              >
                Dashboard
              </NavLink>
            )}
            <NavLink
              to="/Blogs"
              className={({ isActive }) =>
                cn(
                  'block text-sm font-medium transition hover:text-primary',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )
              }
            >
              Blogs
            </NavLink>

            <div className="flex w-full flex-col items-center space-y-2">
              <ModeToggle />
              {isSignedIn ? (
                <UserButton />
              ) : (
                <>
                  <Button asChild variant="outline" className="w-full">
                    <NavLink to="/login">Login</NavLink>
                  </Button>
                  <Button asChild className="w-full">
                    <NavLink to="/signup">Sign Up</NavLink>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
