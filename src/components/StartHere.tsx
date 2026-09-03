import { Eye, AlertCircle, Stethoscope, Pill, Phone } from 'lucide-react';

const cards = [
  { icon: Eye, label: 'What is uveitis?', target: 'understanding' },
  { icon: AlertCircle, label: 'What symptoms might I notice?', target: 'symptoms' },
  { icon: Stethoscope, label: 'What happens at an appointment?', target: 'what-happens-next' },
  { icon: Pill, label: 'How is it treated?', target: 'treatment' },
  { icon: Phone, label: 'When should I get help?', target: 'urgent' },
];

export function StartHere() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Start Here</h2>
          <p className="mt-2 text-slate-600">Five things every family should know</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <button
                key={card.target}
                onClick={() => scrollTo(card.target)}
                className="group flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-300 hover:bg-teal-50/50 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-600 text-white mb-3 group-hover:scale-110 transition-transform">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <span className="text-xs font-bold text-teal-600 mb-1">STEP {i + 1}</span>
                <span className="text-sm font-semibold text-slate-800 leading-snug">{card.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 max-w-3xl mx-auto p-6 bg-teal-50 rounded-2xl border border-teal-100">
          <p className="text-center text-slate-700 leading-relaxed">
            <strong className="text-teal-800">Key message:</strong> Uveitis can affect a child's vision, but with appropriate treatment and regular monitoring, many children are well supported. Every child's situation is different — your eye-care team will guide you.
          </p>
        </div>
      </div>
    </section>
  );
}
