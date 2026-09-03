import { type ReactNode } from 'react';
import { AlertTriangle, Info, CheckCircle, AlertCircle } from 'lucide-react';

type CalloutType = 'warning' | 'info' | 'success' | 'urgent';

const styles: Record<CalloutType, { container: string; icon: string; title: string }> = {
  warning: {
    container: 'bg-amber-50 border-amber-200',
    icon: 'text-amber-600',
    title: 'text-amber-900',
  },
  info: {
    container: 'bg-sky-50 border-sky-200',
    icon: 'text-sky-600',
    title: 'text-sky-900',
  },
  success: {
    container: 'bg-teal-50 border-teal-200',
    icon: 'text-teal-600',
    title: 'text-teal-900',
  },
  urgent: {
    container: 'bg-red-50 border-red-300',
    icon: 'text-red-600',
    title: 'text-red-900',
  },
};

const icons: Record<CalloutType, typeof AlertTriangle> = {
  warning: AlertCircle,
  info: Info,
  success: CheckCircle,
  urgent: AlertTriangle,
};

interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: ReactNode;
}

export function Callout({ type, title, children }: CalloutProps) {
  const Icon = icons[type];
  const style = styles[type];
  return (
    <div className={`flex gap-3 rounded-xl border p-4 ${style.container}`} role="note">
      <Icon className={`shrink-0 mt-0.5 ${style.icon}`} size={20} aria-hidden="true" />
      <div className="min-w-0">
        {title && <p className={`font-semibold mb-1 ${style.title}`}>{title}</p>}
        <div className="text-slate-700 leading-relaxed text-sm">{children}</div>
      </div>
    </div>
  );
}
