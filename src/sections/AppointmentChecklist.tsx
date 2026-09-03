import { useState } from 'react';
import { Printer, CheckSquare, Square } from 'lucide-react';

const questions = [
  'What type of uveitis does my child have?',
  'What may have caused it?',
  'What is the treatment trying to achieve?',
  'How often will follow-up be needed?',
  'What side effects should we watch for?',
  'What symptoms mean we should seek urgent help?',
  'Could there be an underlying condition?',
  "Who else may be involved in my child's care?",
  'How could this affect school or daily activities?',
  'What should we do if we miss treatment or an appointment?',
];

export function AppointmentChecklist() {
  const [checked, setChecked] = useState<boolean[]>(new Array(questions.length).fill(false));

  const toggle = (i: number) => {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  const checkedCount = checked.filter(Boolean).length;

  return (
    <section id="questions" className="py-16 bg-white scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Section 9</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">Questions for Your Appointment</h2>
          <p className="mt-3 text-lg text-slate-600">
            Tick the questions you want to ask. You can print the list to take with you.
          </p>
        </div>

        <div id="print-area" className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-1">My Appointment Questions</h3>
          <p className="text-sm text-slate-500 mb-4">
            Pediatric Uveitis — Patient &amp; Family Information
          </p>

          <ul className="space-y-2">
            {questions.map((q, i) => (
              <li key={i}>
                <label
                  className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200 cursor-pointer hover:border-teal-300 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={checked[i]}
                    onChange={() => toggle(i)}
                    className="mt-0.5 w-5 h-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500 shrink-0"
                    aria-label={q}
                  />
                  <span className={`text-sm leading-relaxed ${checked[i] ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                    {q}
                  </span>
                </label>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              {checkedCount} of {questions.length} selected
            </p>
            <button
              onClick={() => window.print()}
              className="no-print inline-flex items-center gap-2 px-4 py-2.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              <Printer size={18} aria-hidden="true" />
              Print Checklist
            </button>
          </div>
        </div>

        <div className="mt-6 p-5 bg-teal-50 rounded-xl border border-teal-100">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-teal-800">Tip:</strong> You can add your own questions at the bottom of your printed list. It is okay to write things down — clinicians expect and welcome questions.
          </p>
        </div>
      </div>
    </section>
  );
}
