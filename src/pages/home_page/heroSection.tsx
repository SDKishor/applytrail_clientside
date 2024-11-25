import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="my-10 py-16">
      <div className="container mx-auto flex justify-center gap-8 px-6 text-center lg:flex-row">
        <div className="flex flex-col items-center gap-10 md:max-w-full lg:w-3/4">
          <h1 className="font-heading max-w-96 text-4xl font-bold leading-normal md:max-w-full md:text-6xl md:leading-snug lg:w-10/12">
            Stay <span className="text-primary">Organized</span>, Land Your
            Dream <span className="text-primary">Job</span>
          </h1>
          <p className="min-w-[300px] text-lg tracking-wider sm:max-w-full md:max-w-[600px]">
            Track, manage, and optimize your job applications all in one place.
            ApplyTrail makes your job search effortless and organized.
          </p>
          <div className="flex justify-center gap-6 lg:justify-start">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
