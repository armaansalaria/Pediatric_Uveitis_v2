import { Pill, Calendar, Eye, School, Heart, Users, GraduationCap, Smile } from 'lucide-react';

const tips = [
  {
    icon: Pill,
    title: 'Medication routines',
    desc: 'Set a consistent time each day. Using a phone alarm or a chart on the fridge can help. If your child struggles with eye drops, ask your pharmacist or clinician for practical tips.',
  },
  {
    icon: Calendar,
    title: 'Attending appointments',
    desc: 'Regular reviews are essential, even when your child seems well. Inflammation can return without symptoms. Put appointments in your calendar as soon as they are booked.',
  },
  {
    icon: Eye,
    title: 'Monitoring symptoms',
    desc: 'Watch for any new changes — redness, light sensitivity, squinting, or clumsiness. You know your child best. If something seems different, contact your eye-care team.',
  },
  {
    icon: School,
    title: 'School',
    desc: "With your child's permission, it can help to inform the school so staff understand the condition. Your child may need to sit closer to the board or have extra time for visually demanding tasks.",
  },
  {
    icon: GraduationCap,
    title: 'Helping your child understand',
    desc: 'Use simple, honest language. "The medicine helps your eye stay healthy." Let your child ask questions and express worries. Reassure them that the team is looking after them.',
  },
  {
    icon: Smile,
    title: 'Supporting teenagers',
    desc: 'As teenagers mature, they can gradually take more responsibility — setting medication reminders, asking their own questions at appointments, and learning about their condition.',
  },
  {
    icon: Heart,
    title: 'Emotional wellbeing',
    desc: "Living with a chronic eye condition can be frustrating or frightening. Acknowledge your child's feelings. If your child seems anxious or low, speak to your GP or care team.",
  },
  {
    icon: Users,
    title: 'Family &amp; carer support',
    desc: 'Caring for a child with a medical condition affects the whole family. Look after your own wellbeing too. Support groups and parent networks can be valuable.',
  },
];

export function LivingWithUveitis() {
  return (
    <section id="living" className="py-16 bg-slate-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Section 5</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">Living With Uveitis</h2>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            Practical tips for families managing pediatric uveitis day to day.
          </p>
        </div>

        <div className="mb-8 p-5 bg-white rounded-xl border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-2">Activities and sport</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Whether your child can play sport depends on their individual clinical advice. Some activities may need extra care, especially contact sports or activities with a risk of eye injury. <strong>Ask your clinician</strong> before making changes — do not assume your child must stop all activities.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Tips for Families</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {tips.map((tip) => {
              const Icon = tip.icon;
              return (
                <div key={tip.title} className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-sm transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm" dangerouslySetInnerHTML={{ __html: tip.title }} />
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed" dangerouslySetInnerHTML={{ __html: tip.desc }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
