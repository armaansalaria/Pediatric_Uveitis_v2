import { Eye, Heart } from 'lucide-react';

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="no-print bg-slate-900 text-slate-300 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-600 text-white text-xs font-bold">
                PU
              </span>
              <span className="font-bold text-white">Pediatric Uveitis</span>
            </div>
            <p className="text-sm leading-relaxed">
              Evidence-based information for children, young people, parents and carers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-3">Navigate</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollTo('understanding')} className="hover:text-teal-400 transition-colors">Understanding Uveitis</button></li>
              <li><button onClick={() => scrollTo('symptoms')} className="hover:text-teal-400 transition-colors">Signs &amp; Symptoms</button></li>
              <li><button onClick={() => scrollTo('what-happens-next')} className="hover:text-teal-400 transition-colors">What Happens Next</button></li>
              <li><button onClick={() => scrollTo('treatment')} className="hover:text-teal-400 transition-colors">Treatment</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-3">More</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollTo('living')} className="hover:text-teal-400 transition-colors">Living With Uveitis</button></li>
              <li><button onClick={() => scrollTo('monitoring')} className="hover:text-teal-400 transition-colors">Monitoring &amp; Prognosis</button></li>
              <li><button onClick={() => scrollTo('who-can-help')} className="hover:text-teal-400 transition-colors">Who Can Help</button></li>
              <li><button onClick={() => scrollTo('faq')} className="hover:text-teal-400 transition-colors">FAQ</button></li>
              <li><button onClick={() => scrollTo('resources')} className="hover:text-teal-400 transition-colors">Resources</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-3">Important</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollTo('urgent')} className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-semibold transition-colors">
                  <Eye size={16} aria-hidden="true" />
                  Urgent Help
                </button>
              </li>
              <li><button onClick={() => scrollTo('questions')} className="hover:text-teal-400 transition-colors">Questions for Your Appointment</button></li>
              <li><button onClick={() => scrollTo('references')} className="hover:text-teal-400 transition-colors">References</button></li>
              <li><button onClick={() => scrollTo('about')} className="hover:text-teal-400 transition-colors">About This Information</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6">
          <div className="flex items-start gap-2 mb-4">
            <Heart className="text-teal-500 shrink-0 mt-0.5" size={16} aria-hidden="true" />
            <p className="text-xs text-slate-400 leading-relaxed">
              We acknowledge the Traditional Owners and Custodians of the land on which this information is provided, and pay our respects to Elders past, present and emerging.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            This website provides general educational information. It does not replace professional assessment, diagnosis or treatment. &copy; {new Date().getFullYear()} Pediatric Uveitis Patient Information. HMO102 Assessment Task 2.
          </p>
        </div>
      </div>
    </footer>
  );
}
