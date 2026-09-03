import { useState, useEffect } from 'react';
import { Menu, X, AlertTriangle, ArrowUp, Plus, Minus } from 'lucide-react';

const navLinks = [
  { id: 'understanding', label: 'Understanding' },
  { id: 'symptoms', label: 'Symptoms' },
  { id: 'what-happens-next', label: 'What Happens Next' },
  { id: 'treatment', label: 'Treatment' },
  { id: 'living', label: 'Living With It' },
  { id: 'monitoring', label: 'Monitoring' },
  { id: 'who-can-help', label: 'Who Can Help' },
  { id: 'urgent', label: 'Urgent Help' },
  { id: 'faq', label: 'FAQ' },
  { id: 'resources', label: 'Resources' },
];

type TextSize = 'normal' | 'large' | 'xlarge';

export function Navbar({
  textSize,
  onTextSizeChange,
}: {
  textSize: TextSize;
  onTextSizeChange: (size: TextSize) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  const cycleTextSize = () => {
    const order: TextSize[] = ['normal', 'large', 'xlarge'];
    const next = order[(order.indexOf(textSize) + 1) % order.length];
    onTextSizeChange(next);
  };

  const textSizeLabel =
    textSize === 'normal' ? 'A' : textSize === 'large' ? 'A+' : 'A++';

  return (
    <>
      <header
        className={`no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2 font-bold text-slate-800 text-lg shrink-0"
              aria-label="Go to home"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-teal-600 text-white text-sm font-bold">
                PU
              </span>
              <span className="hidden sm:inline">Pediatric Uveitis</span>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('urgent')}
                className="ml-2 flex items-center gap-1.5 px-3 py-2 text-sm font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <AlertTriangle size={16} aria-hidden="true" />
                Urgent Help
              </button>
              <button
                onClick={cycleTextSize}
                className="ml-2 flex items-center gap-1 px-2.5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition-colors border border-slate-200"
                aria-label={`Text size: ${textSizeLabel}. Click to change.`}
              >
                {textSize === 'xlarge' ? <Minus size={14} /> : <Plus size={14} />}
                {textSizeLabel}
              </button>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={cycleTextSize}
                className="flex items-center gap-1 px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition-colors border border-slate-200"
                aria-label={`Text size: ${textSizeLabel}`}
              >
                {textSizeLabel}
              </button>
              <button
                onClick={() => scrollTo('urgent')}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold bg-red-600 text-white rounded-lg"
                aria-label="Urgent help"
              >
                <AlertTriangle size={16} aria-hidden="true" />
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('urgent')}
                className="flex items-center gap-2 w-full px-4 py-3 text-base font-semibold text-white bg-red-600 rounded-lg"
              >
                <AlertTriangle size={18} aria-hidden="true" />
                Urgent Help
              </button>
            </div>
          </div>
        )}
      </header>

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="no-print fixed bottom-6 right-6 z-40 w-11 h-11 flex items-center justify-center bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={20} aria-hidden="true" />
        </button>
      )}
    </>
  );
}
