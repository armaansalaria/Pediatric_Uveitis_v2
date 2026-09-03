import { User, Eye, Stethoscope, Activity, FlaskConical, Pill, Scan, Heart } from 'lucide-react';
import { Callout } from '@/components/Callout';

const team = [
  {
    id: 'optometrist',
    icon: Eye,
    name: 'Optometrist',
    who: 'A primary eye-care professional. In Australia, optometrists examine eyes, assess vision, and can detect signs of uveitis using a slit lamp.<sup class="text-teal-600 font-semibold">[27]</sup>',
    what: 'Performs eye examinations, vision tests, and can refer to an ophthalmologist if uveitis is suspected. Some optometrists co-manage stable patients with ophthalmologists.',
    when: 'Often the first point of contact. Also involved in ongoing vision checks and glasses prescriptions if needed.',
  },
  {
    id: 'ophthalmologist',
    icon: Activity,
    name: 'Ophthalmologist',
    who: 'A medical doctor who specialises in eye disease and surgery. They diagnose uveitis, grade inflammation, and lead treatment.<sup class="text-teal-600 font-semibold">[28]</sup>',
    what: 'Performs detailed eye examinations, prescribes treatment, monitors inflammation and complications, and performs eye surgery if needed.',
    when: "Central to your child's care once uveitis is suspected or confirmed. You will see them regularly for monitoring.",
  },
  {
    id: 'gp',
    icon: Stethoscope,
    name: 'GP (General Practitioner)',
    who: "Your family doctor, who looks after your child's overall health and coordinates care between specialists.",
    what: 'Helps arrange referrals, manages general health, and can coordinate blood tests or other investigations.',
    when: "Often the first contact when you have concerns. Also supports your child's broader health needs throughout.",
  },
  {
    id: 'paediatrician',
    icon: Heart,
    name: 'Paediatrician',
    who: "A doctor who specialises in children's health.",
    what: "Assesses your child's general health and development, and may help investigate possible underlying causes of uveitis.",
    when: 'Involved when there may be an underlying condition, or when overall health assessment is needed.',
  },
  {
    id: 'rheumatologist',
    icon: FlaskConical,
    name: 'Rheumatologist / Paediatric Rheumatologist',
    who: 'A specialist in inflammatory and autoimmune conditions, including juvenile idiopathic arthritis (JIA).',
    what: 'Assesses and manages associated systemic inflammation, and co-manages immunomodulatory and biologic treatments with the eye team.<sup class="text-teal-600 font-semibold">[3,5]</sup>',
    when: 'Involved when uveitis is linked to JIA or another inflammatory condition, or when systemic treatment is needed.',
  },
  {
    id: 'pharmacist',
    icon: Pill,
    name: 'Pharmacist',
    who: 'A medicines expert who can advise on how to use medications safely.',
    what: 'Explains how to use eye drops and other medications, checks for interactions, and can advise on side effects.',
    when: 'Whenever your child is prescribed medication. Your pharmacist is a readily available source of practical advice.',
  },
  {
    id: 'orthoptist',
    icon: Scan,
    name: 'Orthoptist',
    who: 'An allied health professional who specialises in assessing vision and eye movement.',
    what: 'Performs detailed vision assessments, checks eye alignment, and may assist with eye measurements and monitoring.',
    when: 'Often part of the ophthalmology team, helping with assessments at eye clinic visits.',
  },
  {
    id: 'aboriginal',
    icon: Heart,
    name: 'Aboriginal Health Worker / Service',
    who: 'Trained health professionals who provide culturally safe care for Aboriginal and Torres Strait Islander families.',
    what: 'Can help with accessing services, understanding information, transport, and coordination between providers.',
    when: 'For Aboriginal and Torres Strait Islander families, these services can be an important part of the care team.<sup class="text-teal-600 font-semibold">[26,29]</sup>',
  },
];

export function WhoCanHelp() {
  return (
    <section id="who-can-help" className="py-16 bg-slate-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Section 7</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">Who Can Help?</h2>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            Caring for a child with uveitis often involves several professionals working together. Not every child needs every professional listed here.
          </p>
        </div>

        {/* Care team diagram */}
        <div className="mb-10 p-6 bg-white rounded-2xl border border-slate-200 overflow-x-auto">
          <h3 className="text-center text-lg font-bold text-slate-900 mb-6">The Care Team</h3>
          <div className="flex flex-col items-center min-w-[400px]">
            <div className="px-6 py-3 bg-teal-600 text-white rounded-xl font-bold text-center">
              <div className="flex items-center gap-2 justify-center">
                <User size={20} aria-hidden="true" />
                Child + Family
              </div>
            </div>
            <div className="w-px h-8 bg-slate-300" />
            <div className="flex gap-4 sm:gap-8 justify-center flex-wrap">
              <div className="flex flex-col items-center">
                <div className="px-4 py-2 bg-sky-100 text-sky-800 rounded-lg font-semibold text-sm">Optometrist</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="px-4 py-2 bg-teal-100 text-teal-800 rounded-lg font-semibold text-sm">Ophthalmologist</div>
                <div className="w-px h-6 bg-slate-300" />
                <div className="flex gap-3 flex-wrap justify-center">
                  <div className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Rheumatologist</div>
                  <div className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Paediatrician</div>
                  <div className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Orthoptist</div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-semibold text-sm">GP</div>
                <div className="w-px h-6 bg-slate-300" />
                <div className="flex gap-3 flex-wrap justify-center">
                  <div className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Pharmacist</div>
                  <div className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Aboriginal Health Service</div>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center max-w-md">This is a general guide. Your child's team will be tailored to their needs. Lines do not imply every connection is needed for every child.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {team.map((member) => {
            const Icon = member.icon;
            return (
              <div key={member.id} className="p-5 bg-white rounded-xl border border-slate-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-slate-900 pt-1.5" dangerouslySetInnerHTML={{ __html: member.name }} />
                </div>
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="font-semibold text-teal-700 text-xs uppercase tracking-wide">Who they are</dt>
                    <dd className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: member.who }} />
                  </div>
                  <div>
                    <dt className="font-semibold text-teal-700 text-xs uppercase tracking-wide">What they may do</dt>
                    <dd className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: member.what }} />
                  </div>
                  <div>
                    <dt className="font-semibold text-teal-700 text-xs uppercase tracking-wide">When they may be involved</dt>
                    <dd className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: member.when }} />
                  </div>
                </dl>
              </div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-100">
            <h3 className="font-semibold text-slate-900 mb-2">Referral pathways</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your GP or optometrist can refer your child to an ophthalmologist. If a systemic condition is suspected, the ophthalmologist may refer to a rheumatologist or paediatrician. Referrals ensure your child is seen by the right specialist with the right information.
            </p>
          </div>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-100">
            <h3 className="font-semibold text-slate-900 mb-2">Urgent vs routine</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              For sudden vision changes, severe eye pain, or rapidly worsening symptoms, seek <strong>urgent</strong> professional assessment — do not wait for a routine appointment. For regular monitoring or mild concerns, contact your eye-care team to arrange a review.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Callout type="info">
            In Australia, optometrists are primary eye-care providers who can detect uveitis and refer to an ophthalmologist. They use slit-lamp examination as part of comprehensive eye checks.<sup className="text-teal-600 font-semibold">[27]</sup>
          </Callout>
        </div>
      </div>
    </section>
  );
}
