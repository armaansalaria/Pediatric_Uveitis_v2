import { useState } from 'react';
import { ChevronRight, Eye, Scan, Microscope, ClipboardCheck, FlaskConical, MessageSquare, Calendar } from 'lucide-react';
import { Callout } from '@/components/Callout';

const timelineSteps = [
  {
    id: 'step1',
    icon: Eye,
    title: 'Eye assessment',
    desc: "The clinician examines your child's eyes using a slit lamp — a microscope with a bright light. This is painless and does not touch the eye. Eye drops may be used to enlarge the pupil for a better view.",
    detail: 'The examination is usually quick. Your child simply rests their chin on a support while the clinician looks at each eye through the microscope.',
  },
  {
    id: 'step2',
    icon: Scan,
    title: 'Vision assessment',
    desc: 'Your child reads letters or matches pictures on a chart. For very young children, other methods are used to check how well each eye sees.',
    detail: 'This is the same kind of vision test used in routine eye checks. It helps establish a baseline so any changes can be tracked over time.',
  },
  {
    id: 'step3',
    icon: Microscope,
    title: 'Examination for inflammation',
    desc: 'The clinician looks specifically for signs of inflammation inside the eye — cells and "flare" (protein) in the fluid — using the slit lamp. This is how uveitis is graded.<sup class="text-teal-600 font-semibold">[1]</sup>',
    detail: 'The SUN (Standardization of Uveitis Nomenclature) system is used internationally to grade inflammation consistently.',
  },
  {
    id: 'step4',
    icon: ClipboardCheck,
    title: 'Identify the pattern and possible cause',
    desc: "The clinician determines where the inflammation is (anterior, intermediate, or posterior) and discusses possible causes. Blood tests or a review of your child's general health may be suggested.<sup class=\"text-teal-600 font-semibold\">[2,6]</sup>",
    detail: 'In children, uveitis is sometimes linked to juvenile idiopathic arthritis or other inflammatory conditions. Identifying this helps guide treatment.',
  },
  {
    id: 'step5',
    icon: FlaskConical,
    title: 'Additional investigations if required',
    desc: 'Further tests — such as blood tests, eye scans (OCT), or occasionally other imaging — may be arranged. Not every child needs these.',
    detail: 'OCT (optical coherence tomography) is a quick, painless scan that gives a detailed cross-section of the back of the eye. No radiation is involved.',
  },
  {
    id: 'step6',
    icon: MessageSquare,
    title: 'Treatment discussion',
    desc: 'If treatment is needed, the clinician explains what is recommended, why, and how long it may take. This is a good time to ask questions and share any concerns.',
    detail: 'Treatment decisions are made together with you and your child wherever possible. You should feel comfortable asking about benefits, risks and alternatives.',
  },
  {
    id: 'step7',
    icon: Calendar,
    title: 'Follow-up and monitoring',
    desc: "Regular follow-up appointments are arranged to monitor the inflammation and check for any changes. The frequency depends on your child's individual situation.<sup class=\"text-teal-600 font-semibold\">[7]</sup>",
    detail: 'Even when things seem well, these appointments are important — inflammation can return without symptoms.',
  },
];

export function WhatHappensNext() {
  const [openStep, setOpenStep] = useState<string | null>('step1');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="what-happens-next" className="py-16 bg-slate-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Section 3</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">What Happens Next?</h2>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            If uveitis is suspected or confirmed, here is what the pathway usually looks like. Tap each step to learn more.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-teal-200 hidden sm:block" aria-hidden="true" />
          <div className="space-y-3">
            {timelineSteps.map((step, i) => {
              const Icon = step.icon;
              const isOpen = openStep === step.id;
              return (
                <div key={step.id} className="relative">
                  <button
                    onClick={() => setOpenStep(isOpen ? null : step.id)}
                    aria-expanded={isOpen}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                      isOpen
                        ? 'bg-white border-teal-300 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="relative shrink-0">
                      <div className={`w-12 h-12 flex items-center justify-center rounded-full ${
                        isOpen ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-500'
                      } transition-colors`}>
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-[0.65rem] font-bold bg-slate-700 text-white rounded-full">
                        {i + 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900">{step.title}</h3>
                      {!isOpen && (
                        <p className="text-sm text-slate-500 mt-0.5 line-clamp-1">{step.desc.replace(/<[^>]+>/g, '')}</p>
                      )}
                    </div>
                    <ChevronRight
                      className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                      size={20}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="sm:ml-16 mt-2 p-4 bg-teal-50/50 rounded-xl border border-teal-100">
                      <p className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.desc }} />
                      <p className="text-sm text-slate-500 mt-3 italic leading-relaxed">{step.detail}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <Callout type="info" title="Your child's exact pathway may be different">
            Depending on their symptoms, examination findings, possible underlying condition and response to treatment, your child's pathway may vary. Your clinician will explain what to expect.
          </Callout>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => scrollTo('treatment')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors"
          >
            Next: How is it treated?
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
