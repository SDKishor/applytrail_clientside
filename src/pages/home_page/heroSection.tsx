import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const HeroSection = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  gsap.registerPlugin(useGSAP);

  const organizedTextRef = useRef<HTMLSpanElement>(null);
  const jobTextRef = useRef<HTMLSpanElement>(null);
  const getStartedButtonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    gsap.from(organizedTextRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.7,
    });
    gsap.from(jobTextRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.7,
    });
    gsap.from(getStartedButtonRef.current, {
      y: -10,
      duration: 0.7,
      repeat: -1,
      yoyo: true,
      scaleX: 0.92,
    });
  });

  return (
    <section className="my-10 py-16">
      <div className="container mx-auto flex justify-center gap-8 px-6 text-center lg:flex-row">
        <div className="flex flex-col items-center gap-10 md:max-w-full lg:w-3/4">
          <h1 className="max-w-96 font-heading text-4xl font-bold leading-normal md:max-w-full md:text-6xl md:leading-snug lg:w-10/12">
            Stay{' '}
            <span className="inline-block text-primary" ref={organizedTextRef}>
              Organized
            </span>
            , Land Your Dream{' '}
            <span className="inline-block text-primary" ref={jobTextRef}>
              Job
            </span>
          </h1>
          <p className="min-w-[300px] text-lg tracking-wider sm:max-w-full md:max-w-[600px]">
            Track, manage, and optimize your job applications all in one place.
            ApplyTrail makes your job search effortless and organized.
          </p>
          <div className="flex justify-center gap-6 lg:justify-start">
            <Button
              ref={getStartedButtonRef}
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
