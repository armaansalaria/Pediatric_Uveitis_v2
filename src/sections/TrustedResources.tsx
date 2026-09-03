import { trustedResources } from '@/data/resources';
import { ExternalLink } from 'lucide-react';

const categoryLabels: Record<string, string> = {
  australian: 'Australian Eye-Health Resources',
  clinical: 'Clinical Information',
  patient: 'Patient &amp; Family Information',
  indigenous: 'Aboriginal and Torres Strait Islander Resources',
  professional: 'Professional Organisations',
  further: 'Further Reading',
};

const categoryOrder = ['australian', 'clinical', 'patient', 'indigenous', 'professional', 'further'];

export function TrustedResources() {
  return (
    <section id="resources" className="py-16 bg-slate-50 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Section 10</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">Trusted Resources</h2>
          <p className="mt-3 text-lg text-slate-600">
            Verified organisations and sources for further information.
          </p>
        </div>

        {categoryOrder.map((cat) => {
          const items = trustedResources.filter((r) => r.category === cat);
          if (items.length === 0) return null;
          return (
            <div key={cat} className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4" dangerouslySetInnerHTML={{ __html: categoryLabels[cat] }} />
              <div className="grid sm:grid-cols-2 gap-4">
                {items.map((resource) => (
                  <div key={resource.name + resource.url} className="p-5 bg-white rounded-xl border border-slate-200 flex flex-col">
                    <h4 className="font-semibold text-slate-900">{resource.name}</h4>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed flex-grow">{resource.description}</p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700"
                    >
                      Visit Resource
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
