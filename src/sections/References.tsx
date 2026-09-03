import { references } from '@/data/references';
import { SourceBadge } from '@/components/SourceBadge';
import { FileText, Download } from 'lucide-react';

export function References() {
  const handleExport = () => {
    const csv = [
      'id,authors,title,journal,year,volume,issue,pages,doi,url,type',
      ...references.map((r) =>
        [
          r.id,
          `"${r.authors.replace(/"/g, '""')}"`,
          `"${r.title.replace(/"/g, '""')}"`,
          `"${r.journal.replace(/"/g, '""')}"`,
          r.year,
          r.volume || '',
          r.issue || '',
          r.pages || '',
          r.doi || '',
          r.url || '',
          r.type,
        ].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pediatric-uveitis-references.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="references" className="py-16 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Section 11</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">References</h2>
          <p className="mt-3 text-slate-600">
            Sources are listed in Vancouver numbered order. This structured reference data is designed for easy transfer to a citation manager such as Zotero.
          </p>
        </div>

        <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm text-slate-500">{references.length} references in library</p>
          <button
            onClick={handleExport}
            className="no-print inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-teal-700 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors border border-teal-200"
          >
            <Download size={16} aria-hidden="true" />
            Export as CSV (Zotero-ready)
          </button>
        </div>

        <div className="space-y-3">
          {references.map((ref) => (
            <div
              key={ref.id}
              className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3"
            >
              <span className="shrink-0 w-8 h-8 flex items-center justify-center bg-teal-600 text-white text-sm font-bold rounded-lg">
                {ref.id}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-medium text-slate-900">{ref.authors}</span>{' '}
                    {ref.title}{' '}
                    <span className="italic">{ref.journal}</span>. {ref.year}
                    {ref.volume && `;${ref.volume}`}
                    {ref.issue && `(${ref.issue})`}
                    {ref.pages && `:${ref.pages}`}.
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  <SourceBadge type={ref.type} />
                  {ref.doi && (
                    <a
                      href={`https://doi.org/${ref.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-teal-600 hover:underline inline-flex items-center gap-1"
                    >
                      <FileText size={12} aria-hidden="true" />
                      DOI: {ref.doi}
                    </a>
                  )}
                  {ref.url && !ref.doi && (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-teal-600 hover:underline inline-flex items-center gap-1"
                    >
                      <FileText size={12} aria-hidden="true" />
                      View source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Note for the student:</strong> This reference library is a starting point. Verify every source before final submission and add your own verified references from your Zotero library. Replace any unverified entries. The CSV export provides structured data compatible with Zotero import.
          </p>
        </div>
      </div>
    </section>
  );
}
