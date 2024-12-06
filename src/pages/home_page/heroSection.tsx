import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  return (
    <section className="my-10 py-16">
      <div className="container mx-auto flex justify-center gap-8 px-6 text-center lg:flex-row">
        <div className="flex flex-col items-center gap-10 md:max-w-full lg:w-3/4">
          <h1 className="max-w-96 font-heading text-4xl font-bold leading-normal md:max-w-full md:text-6xl md:leading-snug lg:w-10/12">
            Stay <span className="text-primary">Organized</span>, Land Your
            Dream <span className="text-primary">Job</span>
          </h1>
          <p className="min-w-[300px] text-lg tracking-wider sm:max-w-full md:max-w-[600px]">
            Track, manage, and optimize your job applications all in one place.
            ApplyTrail makes your job search effortless and organized.
          </p>
          <div className="flex justify-center gap-6 lg:justify-start">
            <Button
              onClick={() => {
                if (isSignedIn) {
                  navigate('/dashboard');
                } else {
                  navigate('/signup');
                }
              }}
            >
              Get Started
            </Button>
            <Button
              onClick={() =>
                document
                  .getElementById('how-it-works')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              variant="outline"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
