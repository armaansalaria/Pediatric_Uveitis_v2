import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StartHere } from '@/components/StartHere';
import { Footer } from '@/components/Footer';
import { UnderstandingUveitis } from '@/sections/UnderstandingUveitis';
import { SignsAndSymptoms } from '@/sections/SignsAndSymptoms';
import { WhatHappensNext } from '@/sections/WhatHappensNext';
import { TreatmentAndManagement } from '@/sections/TreatmentAndManagement';
import { LivingWithUveitis } from '@/sections/LivingWithUveitis';
import { MonitoringAndPrognosis } from '@/sections/MonitoringAndPrognosis';
import { WhoCanHelp } from '@/sections/WhoCanHelp';
import { UrgentHelp } from '@/sections/UrgentHelp';
import { FAQ } from '@/sections/FAQ';
import { AppointmentChecklist } from '@/sections/AppointmentChecklist';
import { TrustedResources } from '@/sections/TrustedResources';
import { References } from '@/sections/References';
import { AboutAndCulturalSafety } from '@/sections/AboutAndCulturalSafety';

type TextSize = 'normal' | 'large' | 'xlarge';

function App() {
  const [textSize, setTextSize] = useState<TextSize>('normal');

  return (
    <div data-text-size={textSize} className="min-h-screen bg-white">
      <Navbar textSize={textSize} onTextSizeChange={setTextSize} />
      <main>
        <Hero />
        <StartHere />
        <UnderstandingUveitis />
        <SignsAndSymptoms />
        <WhatHappensNext />
        <TreatmentAndManagement />
        <LivingWithUveitis />
        <MonitoringAndPrognosis />
        <WhoCanHelp />
        <UrgentHelp />
        <FAQ />
        <AppointmentChecklist />
        <TrustedResources />
        <References />
        <AboutAndCulturalSafety />
      </main>
      <Footer />
    </div>
  );
}

export default App;
