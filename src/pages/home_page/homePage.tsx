import FeaturesSection from './featuresSection';
import HeroSection from './heroSection';
import HowItWorks from './howItWorkSection';

export default function HomePage() {
  return (
    <>
      {/* hero section */}
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
    </>
  );
}
