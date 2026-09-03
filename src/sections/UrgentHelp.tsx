import { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, Calendar, Info } from 'lucide-react';
import { Callout } from '@/components/Callout';

const urgencySymptoms = [
  { id: 's1', label: 'Sudden or significant reduction in vision', level: 'urgent' as const },
  { id: 's2', label: 'Severe eye pain', level: 'urgent' as const },
  { id: 's3', label: 'Rapidly worsening symptoms', level: 'urgent' as const },
  { id: 's4', label: 'Significant new visual disturbance (e.g. new floaters, flashes)', level: 'urgent' as const },
  { id: 's5', label: 'Significant new light sensitivity', level: 'urgent' as const },
  { id: 's6', label: 'New eye redness that persists', level: 'prompt' as const },
  { id: 's7', label: 'Mild discomfort or eye ache', level: 'prompt' as const },
  { id: 's8', label: 'Minor vision changes', level: 'prompt' as const },
  { id: 's9', label: 'Questions about medication or follow-up', level: 'routine' as const },
  { id: 's10', label: 'General concern but no new symptoms', level: 'routine' as const },
];

const levelConfig = {
  urgent: {
    icon: AlertTriangle,
    title: 'Urgent Professional Assessment',
    color: 'bg-red-600 text-white',
    bgColor: 'bg-red-50 border-red-300',
    advice: 'Seek urgent professional assessment. Do not wait for a routine appointment. If you cannot reach your eye-care team, attend an emergency department or call for emergency services.',
  },
  prompt: {
    icon: Clock,
    title: 'Prompt Eye-Care Review',
    color: 'bg-amber-500 text-white',
    bgColor: 'bg-amber-50 border-amber-200',
    advice: 'Contact your eye-care team (optometrist or ophthalmology clinic) to arrange a review within the next few days. If symptoms worsen, escalate to urgent assessment.',
  },
  routine: {
    icon: Calendar,
    title: 'Routine Follow-Up',
    color: 'bg-teal-600 text-white',
    bgColor: 'bg-teal-50 border-teal-100',
    advice: 'These concerns can usually be discussed at your next scheduled appointment. If you are unsure, contact your eye-care team for guidance.',
  },
};

export function UrgentHelp() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
  };

  const selectedSymptoms = urgencySymptoms.filter((s) => selected.includes(s.id));
  const hasUrgent = selectedSymptoms.some((s) => s.level === 'urgent');
  const hasPrompt = selectedSymptoms.some((s) => s.level === 'prompt');

  const resultLevel: 'urgent' | 'prompt' | 'routine' | null =
    selectedSymptoms.length === 0 ? null : hasUrgent ? 'urgent' : hasPrompt ? 'prompt' : 'routine';

  const ResultIcon = resultLevel ? levelConfig[resultLevel].icon : null;

  return (
    <section id="urgent" className="py-16 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 border border-red-200 rounded-full mb-3">
            <AlertTriangle className="text-red-600" size={18} aria-hidden="true" />
            <span className="text-sm font-semibold text-red-800">Important safety section</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">When to Get Urgent Help</h2>
        </div>

        <div className="space-y-4 mb-8">
          <div className={`p-5 rounded-xl border-2 ${levelConfig.urgent.bgColor}`}>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="text-red-600" size={22} aria-hidden="true" />
              <h3 className="text-lg font-bold text-red-900">Urgent Professional Assessment</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Seek urgent assessment if your child has: <strong>sudden or significant reduction in vision, severe eye pain, rapidly worsening symptoms, or significant new visual disturbance or light sensitivity.</strong>
            </p>
            <p className="text-sm text-slate-700 mt-2 leading-relaxed">
              In Australia, call <strong>000</strong> for emergencies, or attend the nearest hospital emergency department. You can also call <strong>Healthdirect on 1800 022 222</strong> for free health advice from a registered nurse (24 hours, 7 days).
            </p>
          </div>

          <div className={`p-5 rounded-xl border ${levelConfig.prompt.bgColor}`}>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="text-amber-600" size={22} aria-hidden="true" />
              <h3 className="text-lg font-bold text-amber-900">Prompt Eye-Care Review</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Contact your optometrist or ophthalmology clinic within a few days if your child has: <strong>new eye redness that persists, mild discomfort, or minor vision changes</strong> that do not meet the urgent criteria above.
            </p>
          </div>

          <div className={`p-5 rounded-xl border ${levelConfig.routine.bgColor}`}>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="text-teal-600" size={22} aria-hidden="true" />
              <h3 className="text-lg font-bold text-teal-900">Routine Follow-Up</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              For general questions about medication, follow-up timing, or concerns without new symptoms, contact your eye-care team or discuss at your next scheduled appointment.
            </p>
          </div>
        </div>

        {/* Urgency education tool */}
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <Info className="text-teal-600" size={22} aria-hidden="true" />
            <h3 className="text-xl font-bold text-slate-900">"Should I Seek Help Now?" — Symptom Guide</h3>
          </div>
          <Callout type="warning" title="This tool cannot diagnose uveitis or replace professional assessment">
            It is an educational guide only. If you are worried about your child's vision or their symptoms are rapidly worsening, seek urgent professional assessment.
          </Callout>

          <div className="mt-4">
            <p className="text-sm font-medium text-slate-700 mb-3">Select any symptoms your child is experiencing:</p>
            <div className="space-y-2">
              {urgencySymptoms.map((s) => (
                <label
                  key={s.id}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 cursor-pointer hover:border-teal-300 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(s.id)}
                    onChange={() => toggle(s.id)}
                    className="w-5 h-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                    aria-label={s.label}
                  />
                  <span className="text-sm text-slate-700">{s.label}</span>
                </label>
              ))}
            </div>
          </div>

          {resultLevel && ResultIcon && (
            <div className={`mt-4 p-5 rounded-xl border-2 ${levelConfig[resultLevel].bgColor}`}>
              <div className="flex items-center gap-2 mb-2">
                <ResultIcon className={
                  resultLevel === 'urgent' ? 'text-red-600' :
                  resultLevel === 'prompt' ? 'text-amber-600' : 'text-teal-600'
                } size={24} aria-hidden="true" />
                <h4 className={`text-lg font-bold ${
                  resultLevel === 'urgent' ? 'text-red-900' :
                  resultLevel === 'prompt' ? 'text-amber-900' : 'text-teal-900'
                }`}>{levelConfig[resultLevel].title}</h4>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{levelConfig[resultLevel].advice}</p>
              <p className="text-xs text-slate-500 mt-3 italic">
                Because symptoms can have different causes, seek professional advice. This tool does not estimate the probability of uveitis and cannot reassure you when concerning symptoms are present.
              </p>
            </div>
          )}

          {selected.length > 0 && (
            <button
              onClick={() => setSelected([])}
              className="mt-3 text-sm text-slate-500 hover:text-slate-700 underline"
            >
              Clear selections
            </button>
          )}
        </div>

        <div className="mt-6">
          <Callout type="urgent" title="If you are worried">
            If you are worried about your child's vision or their symptoms are rapidly worsening, seek urgent professional assessment. When uncertain, always lean toward professional assessment rather than waiting.
          </Callout>
        </div>
      </div>
    </section>
  );
}
