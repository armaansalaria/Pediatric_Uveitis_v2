import { AccordionItem } from '@/components/Accordion';
import { Callout } from '@/components/Callout';
import { Eye, Pill, Syringe, FlaskConical, Stethoscope, Activity, ClipboardList } from 'lucide-react';

const treatments = [
  {
    id: 't1',
    icon: Eye,
    title: 'Anti-inflammatory eye drops (corticosteroid drops)',
    why: 'To reduce inflammation quickly in the front of the eye.',
    what: 'These drops are placed directly into the eye. They work locally with less effect on the rest of the body.',
    family: 'Your child may need several drops per day initially, then fewer as inflammation settles. Always follow the prescribed schedule. Do not stop suddenly without clinical advice.',
    monitoring: 'Regular slit-lamp checks to confirm the inflammation is improving and to monitor eye pressure, which can rise with steroid drops.<sup class="text-teal-600 font-semibold">[5]</sup>',
  },
  {
    id: 't2',
    icon: Pill,
    title: 'Corticosteroid treatment (oral or injected)',
    why: 'Used when eye drops alone are not enough, or when inflammation is deeper in the eye.',
    what: 'A short course of steroid medication by mouth, or a localised injection around the eye, to calm inflammation more broadly.',
    family: 'These are powerful anti-inflammatory medicines. Side effects can occur, so they are usually used for the shortest effective time. Never adjust the dose without your clinician.',
    monitoring: 'Eye pressure, vision, and general health checks. Your clinician will discuss a plan for reducing the dose gradually if appropriate.<sup class="text-teal-600 font-semibold">[5,10]</sup>',
  },
  {
    id: 't3',
    icon: Syringe,
    title: 'Immunomodulatory treatment (e.g. methotrexate)',
    why: 'Used when inflammation keeps returning, when steroids cannot be reduced, or to avoid long-term steroid side effects.',
    what: "These medicines calm the immune system's overactivity that drives the inflammation. Methotrexate is a common first choice in children.<sup class=\"text-teal-600 font-semibold\">[14,15]</sup>",
    family: 'This is usually a longer-term treatment. It may take weeks to months to work fully. Your child will need regular blood tests to check safety. It is not a "quick fix" but can be very effective.',
    monitoring: 'Regular blood tests for liver and kidney function, and regular eye reviews to confirm the inflammation is controlled.<sup class="text-teal-600 font-semibold">[20]</sup>',
  },
  {
    id: 't4',
    icon: FlaskConical,
    title: 'Biologic therapies (e.g. adalimumab)',
    why: 'Used when immunomodulatory treatment alone is not enough or not tolerated. Adalimumab is supported by high-quality trial evidence for JIA-associated uveitis.<sup class="text-teal-600 font-semibold">[3,23]</sup>',
    what: 'Biologics are targeted medicines that block specific parts of the immune response, such as a protein called TNF. They are usually given by injection under the skin.',
    family: 'Biologics have transformed care for many children with severe uveitis. Your child may be referred to a paediatric rheumatologist to manage this treatment alongside the eye team.',
    monitoring: 'Regular blood tests and infection screening, as well as ongoing eye reviews. Your rheumatologist and ophthalmologist work together.',
  },
  {
    id: 't5',
    icon: Stethoscope,
    title: 'Treatment of associated systemic disease',
    why: 'When uveitis is linked to a condition such as JIA, treating the whole condition helps both the joints and the eyes.',
    what: 'Your child may be referred to a paediatric rheumatologist, who works with the ophthalmologist to choose treatment that addresses both.',
    family: 'Coordinated care between specialists is important. Your GP may also be involved in overall health coordination.',
    monitoring: 'Joint assessments, eye reviews, and blood tests — shared between the specialists involved.',
  },
  {
    id: 't6',
    icon: Activity,
    title: 'Monitoring treatment response',
    why: 'To confirm the inflammation is settling and that the treatment is working.',
    what: 'Your child is seen regularly for slit-lamp examination and vision checks. The clinician grades the inflammation using an international standard.<sup class="text-teal-600 font-semibold">[1]</sup>',
    family: 'These visits are quick but important. Even when your child feels well, they should attend — inflammation can return silently.',
    monitoring: 'Frequency is tailored to your child. More visits are needed during active inflammation or when changing treatment.<sup class="text-teal-600 font-semibold">[7]</sup>',
  },
  {
    id: 't7',
    icon: ClipboardList,
    title: 'Monitoring treatment side effects',
    why: 'Some treatments can cause side effects, and early detection helps keep your child safe.',
    what: 'This may include eye pressure checks (steroids can raise pressure), cataract monitoring (long-term inflammation or steroids can cloud the lens), and blood tests for systemic treatments.',
    family: 'Ask your clinician what side effects to watch for and what to do if you notice them. Most side effects are manageable when caught early.<sup class="text-teal-600 font-semibold">[13,17]</sup>',
    monitoring: 'Eye pressure is checked at most visits. Blood tests are scheduled according to the medication your child is taking.',
  },
];

export function TreatmentAndManagement() {
  return (
    <section id="treatment" className="py-16 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Section 4</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">Treatment &amp; Management</h2>
          <p className="mt-3 text-lg text-slate-600">
            Treatment is tailored to each child. The categories below are commonly used, but your clinician will recommend what is appropriate for your child's specific situation.
          </p>
        </div>

        <div className="space-y-3">
          {treatments.map((t) => {
            const Icon = t.icon;
            return (
              <AccordionItem key={t.id} id={t.id} title={t.title}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wide text-teal-600">Why it may be used</span>
                      <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: t.why }} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wide text-teal-600">What it does</span>
                      <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: t.what }} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wide text-teal-600">What your family should know</span>
                      <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: t.family }} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wide text-teal-600">What monitoring may be needed</span>
                      <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: t.monitoring }} />
                    </div>
                  </div>
                </div>
              </AccordionItem>
            );
          })}
        </div>

        <div className="mt-8">
          <Callout type="warning" title="Important safety reminders">
            This website does not provide medication doses, personalised treatment plans, or instructions to start, stop or change any medication. Always follow your clinician's advice and ask them if you are unsure about anything.
          </Callout>
        </div>
      </div>
    </section>
  );
}
