import { Eye, Sun, Droplet, Waves, Activity, EyeOff, Baby } from 'lucide-react';
import { Callout } from '@/components/Callout';

const symptoms = [
  { icon: EyeOff, title: 'Blurred or reduced vision', desc: 'Your child may struggle to see clearly, or vision may be found to be reduced at an eye test.' },
  { icon: Sun, title: 'Light sensitivity', desc: 'Discomfort or squinting in bright light. Your child may prefer to keep one or both eyes closed.' },
  { icon: Droplet, title: 'Eye redness', desc: 'A pink or red appearance, usually around the coloured part of the eye. Not always present.' },
  { icon: Activity, title: 'Eye discomfort or pain', desc: 'An aching or sore feeling. Some children may not complain of pain even when inflammation is present.' },
  { icon: Waves, title: 'Floaters or visual changes', desc: 'Small spots, dots or shadows drifting in the vision. More common with intermediate or posterior uveitis.' },
  { icon: Eye, title: 'An irregular or small pupil', desc: 'The pupil may appear slightly different in size or shape due to inflammation near the iris.' },
];

const behaviouralClues = [
  'Squinting or closing one eye in bright light',
  'Sitting closer to screens or holding objects nearer',
  'A turn (squint) in one eye that was not there before',
  'Clumsiness or bumping into objects more than usual',
  'Reluctance to read or participate in visually demanding tasks',
];

export function SignsAndSymptoms() {
  return (
    <section id="symptoms" className="py-16 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Section 2</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">Signs &amp; Symptoms</h2>
        </div>

        <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-3xl">
          The signs of uveitis can be subtle. Some children have clear symptoms, but many — especially those with juvenile idiopathic arthritis–associated uveitis — may have few or no obvious symptoms.<sup className="text-teal-600 font-semibold">[4,7]</sup>
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">What might you notice?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {symptoms.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{s.title}</h4>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-8 p-6 bg-teal-50 rounded-2xl border border-teal-100">
          <div className="flex items-center gap-2 mb-3">
            <Baby className="text-teal-600" size={22} aria-hidden="true" />
            <h3 className="text-lg font-bold text-slate-900">Behavioural clues parents and carers may notice</h3>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Young children may not be able to describe what they see. Sometimes the first clues are behavioural:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {behaviouralClues.map((clue) => (
              <li key={clue} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="text-teal-600 font-bold mt-0.5" aria-hidden="true">•</span>
                {clue}
              </li>
            ))}
          </ul>
        </div>

        <Callout type="warning" title="Important">
          Symptoms alone cannot diagnose uveitis. Some children have significant inflammation with no symptoms at all. Only a proper eye examination can detect it.<sup className="text-teal-600 font-semibold">[4,7,12]</sup>
        </Callout>
      </div>
    </section>
  );
}
