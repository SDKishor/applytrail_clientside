import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from '../theme/themeModeToggle';
import { Avatar, AvatarImage } from '../ui/avatar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [user] = useState<boolean>(true);

  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-primary">
            <div className="flex w-8 gap-2">
              <img
                className="hidden w-full dark:block"
                src="/src/assets/logo_light.svg"
                alt="Logo"
              />
              <img
                className="w-full dark:hidden"
                src="/src/assets/logo_dark.svg"
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
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition hover:text-primary',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition hover:text-primary',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )
              }
            >
              About
            </NavLink>
            <ModeToggle />
            {!user ? (
              <div className="space-x-4">
                <Button asChild variant="outline" size="sm">
                  <NavLink to="/login">Login</NavLink>
                </Button>
                <Button asChild size="sm">
                  <NavLink to="/signup">Sign Up</NavLink>
                </Button>
              </div>
            ) : (
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
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
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                cn(
                  'block text-sm font-medium transition hover:text-primary',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn(
                  'block text-sm font-medium transition hover:text-primary',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )
              }
            >
              About
            </NavLink>
            <div className="flex w-full flex-col items-center space-y-2">
              <ModeToggle />
              <Button asChild variant="outline" className="w-full">
                <NavLink to="/login">Login</NavLink>
              </Button>
              <Button asChild className="w-full">
                <NavLink to="/signup">Sign Up</NavLink>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
