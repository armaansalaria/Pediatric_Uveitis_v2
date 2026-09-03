import { Callout } from '@/components/Callout';
import { Activity, MapPin, Gauge, Clock, Pill, AlertTriangle, CalendarCheck } from 'lucide-react';

const factors = [
  { icon: MapPin, label: 'Cause', desc: 'The underlying condition (if one is found) can influence how uveitis behaves.' },
  { icon: Activity, label: 'Location', desc: 'Which part of the eye is inflamed affects risk and management.' },
  { icon: Gauge, label: 'Severity', desc: 'More severe inflammation may need more intensive treatment.' },
  { icon: Clock, label: 'Duration', desc: 'How long inflammation lasts can affect the risk of complications.' },
  { icon: Pill, label: 'Treatment response', desc: 'How well the inflammation responds to treatment varies between children.' },
  { icon: AlertTriangle, label: 'Complications', desc: 'Possible complications include cataract, raised eye pressure, and swelling at the back of the eye.<sup class="text-teal-600 font-semibold">[13,17]</sup>' },
  { icon: CalendarCheck, label: 'Monitoring', desc: 'Regular monitoring helps detect and manage problems early.<sup class="text-teal-600 font-semibold">[7]</sup>' },
];

export function MonitoringAndPrognosis() {
  return (
    <section id="monitoring" className="py-16 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Section 6</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">Monitoring &amp; Prognosis</h2>
        </div>

        <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-3xl">
          Monitoring matters because inflammation can return without symptoms, and because some complications develop gradually. Regular reviews allow your eye-care team to detect and address problems early.<sup className="text-teal-600 font-semibold">[4,7]</sup>
        </p>

        <div className="mb-10">
          <h3 className="text-xl font-bold text-slate-900 mb-2">What can affect the outlook?</h3>
          <p className="text-sm text-slate-500 mb-6 italic">This is a conceptual explanation, not a predictive calculator.</p>

          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
              {factors.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-xl border border-slate-200 w-full">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-700 mb-2">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <span className="text-sm font-bold text-slate-800">{f.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-center my-2">
              <div className="w-16 h-0.5 bg-teal-400" />
              <span className="text-2xl text-teal-600 font-bold px-2">=</span>
              <div className="w-16 h-0.5 bg-teal-400" />
            </div>

            <div className="px-8 py-4 bg-teal-600 text-white rounded-2xl text-center">
              <p className="text-lg font-bold">Individual outlook</p>
              <p className="text-sm text-teal-50 mt-1">Every child's situation is unique</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            {factors.map((f) => (
              <div key={f.label + '-desc'} className="text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-800">{f.label}: </strong>
                <span dangerouslySetInnerHTML={{ __html: f.desc }} />
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Prognosis varies</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Outlook depends on the factors above. Some children do very well with treatment and monitoring; others need more intensive, longer-term care. Your clinician is the best person to discuss your child's individual outlook.<sup className="text-teal-600 font-semibold">[13,17,20]</sup>
            </p>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Possible complications</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Complications can include cataract (clouding of the lens), glaucoma (raised eye pressure), macular oedema (swelling at the back of the eye), and — in severe or prolonged cases — permanent vision loss. Monitoring helps reduce these risks.<sup className="text-teal-600 font-semibold">[13,17]</sup>
            </p>
          </div>
        </div>

        <Callout type="info" title="What this means for your family">
          No website can predict your child's future vision. What matters is attending regular reviews, following treatment, and seeking help promptly if symptoms change. Your care team will discuss your child's outlook with you.
        </Callout>
      </div>
    </section>
  );
}
