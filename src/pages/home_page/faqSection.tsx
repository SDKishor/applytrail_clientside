import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 1,
    question: 'What is ApplyTrail?',
    answer:
      'ApplyTrail is a job application tracker that helps you stay organized by logging your applications, tracking their status, and setting reminders.',
  },
  {
    id: 2,
    question: 'Is ApplyTrail free to use?',
    answer:
      'Yes! ApplyTrail is free to use with basic features. Premium plans may be introduced for advanced functionalities.',
  },
  {
    id: 3,
    question: 'Can I track applications from multiple platforms?',
    answer:
      'Absolutely! You can track job applications from any platform, including LinkedIn, Indeed, or company websites.',
  },
  {
    id: 4,
    question: 'Does ApplyTrail send reminders for deadlines?',
    answer:
      'Yes, you can set custom reminders for application follow-ups, interviews, and other deadlines.',
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white py-12 font-sans dark:bg-[#343A4B]">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
          FAQs
        </h2>
        <p className="mb-12 text-gray-600 dark:text-gray-400">
          Have questions? We’re here to help!
        </p>
        <div className="mx-auto max-w-4xl text-left">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                <AccordionTrigger className="rounded-lg bg-gray-50 p-4 font-heading text-lg font-medium hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="rounded-lg bg-gray-50 p-4 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
