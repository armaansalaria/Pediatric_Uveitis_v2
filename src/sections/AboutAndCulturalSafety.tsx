import { Info, Shield, Calendar, BookOpen, Heart, MapPin } from 'lucide-react';

export function AboutAndCulturalSafety() {
  return (
    <>
      {/* Cultural Safety section */}
      <section id="cultural-safety" className="py-16 bg-slate-50 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Cultural Safety</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">Acknowledgement of Country</h2>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 mb-8">
            <div className="flex items-start gap-3 mb-3">
              <Heart className="text-teal-600 shrink-0 mt-1" size={22} aria-hidden="true" />
              <p className="text-slate-700 leading-relaxed">
                We acknowledge the Traditional Owners and Custodians of the land on which this information is provided, and pay our respects to Elders past, present and emerging. We recognise their continuing connection to land, waters and community.
              </p>
            </div>
            <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200 border-dashed">
              <p className="text-sm text-amber-800">
                <strong>Editable placeholders — replace before submission:</strong><br />
                Location: [PRACTICE LOCATION]<br />
                Traditional Owners: [TRADITIONAL OWNER/S]
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Culturally Safe Care</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Healthcare access and understanding can be influenced by many factors. We acknowledge that every family's experience is different.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Language and communication preferences',
                'Geographic location and access to services',
                'Transport and travel requirements',
                'Health literacy and prior healthcare experiences',
                'Cultural perspectives on health and wellbeing',
                'Family circumstances and support networks',
                'Access to specialist and outreach services',
                'Previous experiences with the healthcare system',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 p-3 bg-white rounded-lg border border-slate-200">
                  <span className="text-teal-600 font-bold mt-0.5" aria-hidden="true">•</span>
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-teal-50 rounded-xl border border-teal-100">
            <p className="text-sm text-slate-700 leading-relaxed">
              We are committed to respectful, strengths-based communication. This means recognising the knowledge and capabilities that families bring, and working alongside them — not making assumptions based on background, culture, or circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* About This Information */}
      <section id="about" className="py-16 bg-white scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Section 12</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">About This Information</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Info className="text-teal-600" size={20} aria-hidden="true" />
                <h3 className="font-semibold text-slate-900">Purpose</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                To provide clear, evidence-based information to help children, young people and their families understand pediatric uveitis, recognise important symptoms, understand treatment and monitoring, and know when and where to seek professional help.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="text-teal-600" size={20} aria-hidden="true" />
                <h3 className="font-semibold text-slate-900">Intended Audience</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Parents, carers, teenagers, young people, and family members who want to understand pediatric uveitis. Written for people with little or no medical background.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="text-teal-600" size={20} aria-hidden="true" />
                <h3 className="font-semibold text-slate-900">Evidence-Based Approach</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Content is informed by peer-reviewed research, clinical guidelines, consensus statements, and authoritative health organisations. Vancouver-style numbered citations are used throughout.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="text-teal-600" size={20} aria-hidden="true" />
                <h3 className="font-semibold text-slate-900">Last Reviewed</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                <span className="inline-block px-2 py-0.5 bg-amber-100 text-amber-800 rounded text-xs font-semibold">[DATE TO BE ADDED]</span>
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Medical guidance can change as new evidence emerges. Always check with your clinician for the most current advice.
              </p>
            </div>
          </div>

          {/* Source type explanations */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Understanding Source Types</h3>
            <div className="space-y-2">
              {[
                { label: 'Peer-Reviewed', desc: 'Research published in academic journals after expert review.' },
                { label: 'Clinical Guideline', desc: 'Recommendations developed by professional bodies based on evidence.' },
                { label: 'Systematic Review', desc: 'A structured summary of multiple studies on a topic.' },
                { label: 'Professional Organisation', desc: 'Authoritative bodies representing healthcare professionals.' },
                { label: 'Health Authority', desc: 'Government or official health agencies.' },
                { label: 'Patient Resource', desc: 'Information designed specifically for patients and families.' },
              ].map((s) => (
                <div key={s.label} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="shrink-0 text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
                    {s.label}
                  </span>
                  <span className="text-sm text-slate-600">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-5 bg-red-50 rounded-xl border border-red-200">
            <div className="flex items-start gap-3">
              <Info className="text-red-600 shrink-0 mt-0.5" size={20} aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-red-900 mb-1">Educational Disclaimer</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  This website provides general educational information. It does not replace professional assessment, diagnosis or treatment. Always consult a qualified eye-care professional about your child's specific situation. Do not start, stop, or change any medication based on this website alone.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed mt-2">
                  This website has not been clinically reviewed unless a qualified clinician has formally done so and this is documented here. Medical knowledge changes over time — always verify with current professional sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
