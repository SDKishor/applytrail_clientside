import { AlarmClock, ChartNoAxesCombined, CheckCircle } from 'lucide-react';

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
  return (
    <section className="mx-auto max-w-7xl rounded-lg bg-gray-50 px-6 pt-10 dark:bg-gray-800">
      <h2 className="text-center font-heading text-3xl font-bold">
        Key Features
      </h2>
      <div className="flex flex-wrap justify-center gap-8 py-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex w-80 flex-col items-center rounded-lg bg-primary/10 p-6 text-center shadow-md"
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
