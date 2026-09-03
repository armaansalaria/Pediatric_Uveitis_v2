import { Eye, AlertTriangle, ChevronRight } from 'lucide-react';

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full opacity-30 blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-100 rounded-full opacity-20 blur-3xl translate-y-1/3" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-200 rounded-full mb-6">
          <Eye className="text-teal-600" size={18} aria-hidden="true" />
          <span className="text-sm font-medium text-teal-800">Evidence-based patient &amp; family information</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
          Pediatric Uveitis
        </h1>

        <p className="mt-4 text-xl sm:text-2xl text-teal-700 font-medium">
          Understanding inflammation inside the eye
        </p>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Clear, evidence-based information for children, young people, parents and carers.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => scrollTo('understanding')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors shadow-sm"
          >
            Understand Uveitis
            <ChevronRight size={20} aria-hidden="true" />
          </button>
          <button
            onClick={() => scrollTo('urgent')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-red-700 font-semibold rounded-xl border-2 border-red-200 hover:bg-red-50 transition-colors"
          >
            <AlertTriangle size={20} aria-hidden="true" />
            When to Get Urgent Help
          </button>
        </div>

        <p className="mt-8 text-sm text-slate-500 max-w-2xl mx-auto italic border-l-4 border-slate-200 pl-4 text-left">
          This website provides general educational information. It does not replace professional assessment, diagnosis or treatment.
        </p>
      </div>
    </section>
  );
}
