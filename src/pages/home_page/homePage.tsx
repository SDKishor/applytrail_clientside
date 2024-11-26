import FaqSection from './faqSection';
import FeaturesSection from './featuresSection';
import HeroSection from './heroSection';
import HowItWorks from './howItWorkSection';
import Testimonials from './testimonialsSection';

export default function HomePage() {
  return (
    <>
      {/* hero section */}
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <FaqSection />
    </>
  );
}
