import { type SourceType } from '@/data/references';

const badgeStyles: Record<SourceType, string> = {
  'Peer-Reviewed': 'bg-blue-100 text-blue-800 border border-blue-200',
  'Clinical Guideline': 'bg-teal-100 text-teal-800 border border-teal-200',
  'Professional Organisation': 'bg-slate-100 text-slate-700 border border-slate-200',
  'Health Authority': 'bg-green-100 text-green-800 border border-green-200',
  'Patient Resource': 'bg-amber-100 text-amber-800 border border-amber-200',
  'Systematic Review': 'bg-indigo-100 text-indigo-800 border border-indigo-200',
};

export function SourceBadge({ type }: { type: SourceType }) {
  return (
    <span className={`inline-block text-[0.65rem] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${badgeStyles[type]}`}>
      {type}
    </span>
  );
}
