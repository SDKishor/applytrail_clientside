import { Button } from '@/components/ui/button';

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

  return (
    <section className="px-6 py-12">
      <h1 className="font-heading text-center text-3xl font-bold">
        How It Works
      </h1>
      <div className="my-10">
        {/* step 1 */}
        <div className="flex h-[200px] w-full justify-center lg:h-[250px]">
          <div className="flex flex-1">
            <div className="flex flex-1 items-center justify-end">
              <Button variant={'outline2'} size={'zero'}>
                STEP - 1
              </Button>
            </div>
            <div className="flex w-12 items-center md:w-32">
              <div className="h-[2px] w-full bg-[#353B4C] dark:bg-white"></div>
            </div>
          </div>
          <div className="h-full w-[2px] bg-[#353B4C]"></div>
          <div className="flex-1">
            <div className="flex h-full flex-col items-start justify-center pl-4 lg:pl-5">
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
            <div className="flex h-full flex-col items-end justify-center pr-4 text-right">
              <h2 className="font-heading text-lg font-bold md:text-2xl">
                {steps[1].title}
              </h2>
              <p className="mt-2 max-w-80 text-xs tracking-wider opacity-70 lg:text-base">
                {steps[1].description}
              </p>
            </div>
          </div>
          <div className="h-full w-[2px] bg-[#353B4C]"></div>

          <div className="flex flex-1">
            <div className="flex w-12 items-center md:w-32">
              <div className="h-[2px] w-full bg-[#353B4C]"></div>
            </div>
            <div className="flex flex-1 items-center justify-start">
              <Button variant={'outline2'} size={'zero'}>
                STEP - 2
              </Button>
            </div>
          </div>
        </div>

        {/* step 3 */}

        <div className="flex h-[200px] w-full justify-center lg:h-[250px]">
          <div className="flex flex-1">
            <div className="flex flex-1 items-center justify-end">
              <Button variant={'outline2'} size={'zero'}>
                STEP - 3
              </Button>
            </div>
            <div className="flex w-12 items-center md:w-32">
              <div className="h-[2px] w-full bg-[#353B4C]"></div>
            </div>
          </div>
          <div className="h-full w-[2px] bg-[#353B4C]"></div>
          <div className="flex-1">
            <div className="flex h-full flex-col items-start justify-center pl-4 lg:pl-5">
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
