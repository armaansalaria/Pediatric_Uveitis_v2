import { EyeAnatomy } from '@/components/EyeAnatomy';
import { Callout } from '@/components/Callout';
import { Info } from 'lucide-react';

export function UnderstandingUveitis() {
  return (
    <section id="understanding" className="py-16 bg-slate-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Section 1</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">Understanding Uveitis</h2>
        </div>

        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>Uveitis means inflammation inside the eye.</strong> "Inflammation" is the body's immune response — the same process that causes a cut to become red and swollen. When inflammation happens inside the eye, it can affect vision.<sup className="text-teal-600 font-semibold">[1,2]</sup>
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            In children, uveitis most often affects the front part of the eye — the iris and the ciliary body — and this is called <strong>anterior uveitis</strong>.<sup className="text-teal-600 font-semibold">[6,8]</sup> Less commonly, inflammation can occur in the middle (intermediate) or back (posterior) of the eye.<sup className="text-teal-600 font-semibold">[1]</sup>
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Pediatric uveitis is sometimes linked to an underlying condition such as <strong>juvenile idiopathic arthritis (JIA)</strong>, which is a type of childhood arthritis.<sup className="text-teal-600 font-semibold">[4,6]</sup> In many children, however, no underlying cause is found.<sup className="text-teal-600 font-semibold">[12]</sup>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="p-5 bg-white rounded-xl border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Why pediatric uveitis can differ between children</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              The cause, location, severity and response to treatment can vary. Some children have a one-off episode; others need ongoing treatment and monitoring.<sup className="text-teal-600 font-semibold">[6,13]</sup>
            </p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Why symptoms may be mild</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Many children with uveitis — especially those with JIA-associated uveitis — have little or no pain and no visible redness. This is why regular screening is important for children at risk.<sup className="text-teal-600 font-semibold">[4,7]</sup>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Info className="text-teal-600" size={22} aria-hidden="true" />
            <h3 className="text-xl font-bold text-slate-900">Interactive Eye Anatomy</h3>
          </div>
          <EyeAnatomy />
        </div>

        <Callout type="info" title="What this means for your child">
          Uveitis is not an infection and is not contagious. It is an inflammatory condition that needs proper assessment. Even without obvious symptoms, inflammation inside the eye can affect vision over time — which is why monitoring matters.<sup className="text-teal-600 font-semibold">[4,7]</sup>
        </Callout>
      </div>
    </section>
  );
}
