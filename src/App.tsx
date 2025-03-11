import { Footer } from './components/Footer';
import { TeamSection } from './components/TeamSection';
import { HeroSection } from './components/HeroSection';
import { OurStorySection } from './components/OurStorySection';
import { ImpactSection } from './components/ImpactSection';
import { ContactSection } from './components/ContactSection';
import { LgbtStatisticsSection } from './components/LgbtStatisticsSection';
import { CoreProgramSection } from './components/CoreProgramSection';
import { TransparencySection } from './components/TransparencySection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <LgbtStatisticsSection />
      <OurStorySection />
      <CoreProgramSection />
      <ImpactSection />
      <TeamSection />
      <TransparencySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;