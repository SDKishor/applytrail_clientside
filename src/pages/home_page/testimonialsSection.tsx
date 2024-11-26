import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useEmblaCarousel from 'embla-carousel-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  feedback: string;
  avatar: string | null;
};

interface CarouselItemProps {
  key: number;
  testimonial: Testimonial;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'Software Engineer',
    feedback:
      'ApplyTrail made my job search effortless! I could track all my applications and never missed a follow-up.',
    avatar: 'https://i.pravatar.cc/200?img=68',
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Product Manager',
    feedback:
      'The reminders and organized dashboard were game-changers. I landed my dream job thanks to ApplyTrail!',
    avatar: 'https://i.pravatar.cc/200?img=52',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'UX Designer',
    feedback:
      'I loved the simplicity and ease of use. ApplyTrail kept my job hunt stress-free!',
    avatar: 'https://i.pravatar.cc/200?img=47',
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'Frontend Developer',
    feedback:
      'ApplyTrail saved me time and made my job search more efficient. Highly recommended!',
    avatar: 'https://i.pravatar.cc/200?img=51',
  },
  {
    id: 5,
    name: 'Sarah Davis',
    role: 'Data Analyst',
    feedback:
      'The dashboard was user-friendly and easy to navigate. I never missed a follow-up!',
    avatar: 'https://i.pravatar.cc/200?img=49',
  },
];

const CarouselItem = ({ testimonial }: CarouselItemProps) => {
  return (
    <Card
      key={testimonial.id}
      className="mx-4 min-w-64 rounded-lg p-6 shadow-md dark:bg-primary/10 md:min-w-80 lg:min-w-96"
    >
      <CardHeader className="flex flex-row p-0 pb-2">
        <Avatar className="mb-4 h-16 w-16">
          {testimonial.avatar ? (
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          ) : (
            <AvatarFallback>
              {testimonial.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="mx-4 h-auto flex-1 text-start">
          <CardTitle className="text-lg font-semibold">
            {testimonial.name}
          </CardTitle>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-sm text-gray-600 dark:text-white/70">
          {testimonial.feedback}
        </p>
      </CardContent>
    </Card>
  );
};

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true });

  return (
    <section className="bg-gray-50 py-12 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 font-heading text-3xl font-bold">
          What Our Users Are Saying
        </h2>
        <p className="mb-12 text-gray-600 dark:text-white/50">
          Discover how ApplyTrail is transforming job searches for thousands of
          users.
        </p>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom">
            {testimonials.map((item: Testimonial) => (
              <CarouselItem key={item.id} testimonial={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
