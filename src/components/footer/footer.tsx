import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="mt-5 border-t border-border bg-background py-6">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-end justify-between space-y-4 py-10 md:flex-row md:space-y-0">
          {/* Left Side: Logo and Tagline */}
          <div className="flex w-full flex-col items-center gap-2 md:items-start">
            <div className="flex w-full justify-center gap-2 text-xl font-bold md:justify-start">
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
                </div>
              </NavLink>
              ApplyTrail
            </div>
            <div className="text-lg opacity-60">
              Simplify your job applications.
            </div>
          </div>

          {/* Right Side: Links */}
          <div className="flex w-full justify-evenly md:flex-col md:space-y-2">
            <a
              href="/privacy"
              className="text-sm font-medium text-muted-foreground transition hover:text-primary md:text-right"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm font-medium text-muted-foreground transition hover:text-primary md:text-right"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition hover:text-primary md:text-right"
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* Bottom Text */}
        <div className="mt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ApplyTrail. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
