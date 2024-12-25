import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlarmClock, ChartNoAxesCombined, CheckCircle } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: <CheckCircle size={32} className="text-accent" />,
    title: 'Track Applications',
    description: 'Organize your job applications by status and deadlines.',
  },
  {
    icon: <AlarmClock size={32} className="text-accent" />,
    title: 'Personalized Reminders',
    description: 'Get notified about deadlines and interviews.',
  },
  {
    icon: <ChartNoAxesCombined size={32} className="text-accent" />,
    title: 'Analytics Dashboard',
    description: 'Helps you to identify trends and optimize your strategies..',
  },
];

const FeaturesSection = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const featuresRef = useRef<HTMLDivElement>(null);
  const featuresSecRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.freature-card', {
      scale: 0,
      y: -50,
      duration: 0.7,
      stagger: 0.2,

      scrollTrigger: {
        trigger: featuresRef.current,
        start: 'top 70%',
        end: 'top 20%',
        toggleActions: 'play pause resume reset',
      },
    });
    gsap.from(featuresSecRef.current, {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        trigger: featuresSecRef.current,
        start: 'top 60%',
        end: 'top 20%',
        toggleActions: 'play pause resume reset',
      },
    });
  });

  return (
    <section
      ref={featuresSecRef}
      className="mx-auto max-w-7xl rounded-lg bg-gray-50 px-6 pt-10 dark:bg-gray-800"
    >
      <h2 className="text-center font-heading text-3xl font-bold">
        Key Features
      </h2>
      <div
        ref={featuresRef}
        className="flex flex-wrap justify-center gap-8 py-10"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="freature-card flex w-80 flex-col items-center rounded-lg bg-primary/10 p-6 text-center shadow-md"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="mb-2 font-heading text-lg font-semibold">
              {feature.title}
            </h3>
            <p className="text-black/50 dark:text-white/50">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
