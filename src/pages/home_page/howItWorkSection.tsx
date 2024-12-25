import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function HowItWorks() {
  type Step = {
    id: number;
    title: string;
    description: string;
  };

  const steps: Step[] = [
    {
      id: 1,
      title: 'Sign Up',
      description:
        'Create an account in just a few clicks and get started for free.',
    },
    {
      id: 2,
      title: 'Add Applications',
      description:
        'Log your job applications, track their status, and set reminders for follow-ups.',
    },
    {
      id: 3,
      title: 'Stay Organized',
      description:
        'View all your job applications in one place and get notified about upcoming deadlines.',
    },
  ];

  const stepRefs = useRef<HTMLButtonElement | null[]>([]);
  const stepTextRefs = useRef<HTMLButtonElement | null[]>([]);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#how-it-works',
        start: 'top 70%',
        end: 'top -5%',
        toggleActions: 'play pause resume reset',
        scrub: 1,
      },
    });

    timeline.from(stepRefs.current, {
      opacity: 0,
      x: (index) => (index % 2 === 0 ? -50 : 50),
      duration: 0.7,
      stagger: 1,
    });

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#how-it-works',
        start: 'top 60%',
        end: 'top -25%',
        toggleActions: 'play pause resume reset',
        markers: true,
      },
    });

    timeline2.from(stepTextRefs.current, {
      x: (index) => (index % 2 === 0 ? -150 : 50),
      opacity: 0,
      duration: 0.5,
      stagger: 1.2,
    });
  });

  return (
    <section id="how-it-works" className="px-6 py-12">
      <h1 className="text-center font-heading text-3xl font-bold">
        How It Works
      </h1>
      <div className="my-10">
        {/* step 1 */}
        <div className="flex h-[200px] w-full justify-center lg:h-[250px]">
          <div className="flex flex-1">
            <div className="flex flex-1 items-center justify-end">
              <Button
                ref={(el) => (stepRefs.current[0] = el)}
                className="cursor-default"
                variant={'outline2'}
                size={'zero'}
              >
                STEP - 1
              </Button>
            </div>
            <div className="flex w-12 items-center md:w-32">
              <div className="h-[2px] w-full bg-[#353B4C] dark:bg-white"></div>
            </div>
          </div>
          <div className="h-full w-[2px] bg-[#353B4C] dark:bg-white"></div>
          <div className="flex-1 overflow-hidden">
            <div
              ref={(el) => (stepTextRefs.current[0] = el)}
              className="flex h-full flex-col items-start justify-center pl-4 lg:pl-5"
            >
              <h2 className="font-heading text-lg font-bold md:text-2xl">
                {steps[0].title}
              </h2>
              <p className="mt-2 max-w-80 text-xs tracking-wider opacity-70 lg:text-base">
                {steps[0].description}
              </p>
            </div>
          </div>
        </div>
        {/* step 2 */}

        <div className="flex h-[200px] w-full justify-center lg:h-[250px]">
          <div className="flex-1">
            <div
              ref={(el) => (stepTextRefs.current[1] = el)}
              className="flex h-full flex-col items-end justify-center pr-4 text-right"
            >
              <h2 className="font-heading text-lg font-bold md:text-2xl">
                {steps[1].title}
              </h2>
              <p className="mt-2 max-w-80 text-xs tracking-wider opacity-70 lg:text-base">
                {steps[1].description}
              </p>
            </div>
          </div>
          <div className="h-full w-[2px] bg-[#353B4C] dark:bg-white"></div>

          <div className="flex flex-1">
            <div className="flex w-12 items-center md:w-32">
              <div className="h-[2px] w-full bg-[#353B4C] dark:bg-white"></div>
            </div>
            <div className="flex flex-1 items-center justify-start">
              <Button
                ref={(el) => (stepRefs.current[1] = el)}
                variant={'outline2'}
                size={'zero'}
              >
                STEP - 2
              </Button>
            </div>
          </div>
        </div>

        {/* step 3 */}

        <div className="flex h-[200px] w-full justify-center lg:h-[250px]">
          <div className="flex flex-1">
            <div className="flex flex-1 items-center justify-end">
              <Button
                ref={(el) => (stepRefs.current[2] = el)}
                variant={'outline2'}
                size={'zero'}
              >
                STEP - 3
              </Button>
            </div>
            <div className="flex w-12 items-center md:w-32">
              <div className="h-[2px] w-full bg-[#353B4C] dark:bg-white"></div>
            </div>
          </div>
          <div className="h-full w-[2px] bg-[#353B4C] dark:bg-white"></div>
          <div className="flex-1">
            <div
              ref={(el) => (stepTextRefs.current[2] = el)}
              className="flex h-full flex-col items-start justify-center pl-4 lg:pl-5"
            >
              <h2 className="font-heading text-lg font-bold md:text-2xl">
                {steps[2].title}
              </h2>
              <p className="mt-2 max-w-80 text-xs tracking-wider opacity-70 lg:text-base">
                {steps[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
