import { useState } from 'react';
import { eyeParts } from '@/data/eyeAnatomy';

export function EyeAnatomy() {
  const [selected, setSelected] = useState(eyeParts[2].id);
  const part = eyeParts.find((p) => p.id === selected)!;

  return (
    <div className="grid lg:grid-cols-2 gap-6 items-start">
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-md aspect-square">
          <svg viewBox="0 0 400 400" className="w-full h-full" role="img" aria-label="Cross-section diagram of the human eye">
            {/* Sclera */}
            <circle
              cx="200" cy="200" r="170"
              fill="#fbfbfb" stroke="#cbd5e1" strokeWidth="2"
              className={`cursor-pointer transition-all ${selected === 'sclera' ? 'stroke-teal-500 stroke-[3]' : 'hover:stroke-slate-400'}`}
              onClick={() => setSelected('sclera')}
              tabIndex={0}
              role="button"
              aria-label="Sclera"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected('sclera'); } }}
            />
            {/* Cornea */}
            <path
              d="M 200 30 Q 130 35 110 80 L 110 80 Q 130 40 200 38 Q 270 40 290 80 L 290 80 Q 270 35 200 30 Z"
              fill="#bae6fd" stroke="#0284c7" strokeWidth="2"
              className={`cursor-pointer transition-all ${selected === 'cornea' ? 'stroke-teal-500 stroke-[3]' : 'hover:stroke-blue-500'}`}
              onClick={() => setSelected('cornea')}
              tabIndex={0}
              role="button"
              aria-label="Cornea"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected('cornea'); } }}
            />
            <path d="M 110 80 L 110 120 L 290 120 L 290 80 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" opacity="0.5" />
            {/* Iris */}
            <ellipse
              cx="200" cy="130" rx="60" ry="18"
              fill="#5eead4" stroke="#0d9488" strokeWidth="2"
              className={`cursor-pointer transition-all ${selected === 'iris' ? 'stroke-teal-500 stroke-[3]' : 'hover:stroke-teal-600'}`}
              onClick={() => setSelected('iris')}
              tabIndex={0}
              role="button"
              aria-label="Iris"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected('iris'); } }}
            />
            <circle cx="200" cy="130" r="14" fill="#1e293b" />
            {/* Ciliary body */}
            <path
              d="M 120 120 Q 120 140 135 155 L 155 145 Q 140 130 140 120 Z M 280 120 Q 280 140 265 155 L 245 145 Q 260 130 260 120 Z"
              fill="#a7f3d0" stroke="#0d9488" strokeWidth="1.5"
              className={`cursor-pointer transition-all ${selected === 'ciliary-body' ? 'stroke-teal-500 stroke-[3]' : 'hover:stroke-teal-600'}`}
              onClick={() => setSelected('ciliary-body')}
              tabIndex={0}
              role="button"
              aria-label="Ciliary body"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected('ciliary-body'); } }}
            />
            {/* Lens */}
            <ellipse
              cx="200" cy="160" rx="30" ry="22"
              fill="#f0fdfa" stroke="#0d9488" strokeWidth="2"
              className={`cursor-pointer transition-all ${selected === 'lens' ? 'stroke-teal-500 stroke-[3]' : 'hover:stroke-teal-600'}`}
              onClick={() => setSelected('lens')}
              tabIndex={0}
              role="button"
              aria-label="Lens"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected('lens'); } }}
            />
            {/* Vitreous */}
            <circle
              cx="200" cy="240" r="90"
              fill="#f8fafc" stroke="#94a3b8" strokeWidth="1"
              className={`cursor-pointer transition-all ${selected === 'vitreous' ? 'stroke-teal-500 stroke-[3]' : 'hover:stroke-slate-400'}`}
              onClick={() => setSelected('vitreous')}
              tabIndex={0}
              role="button"
              aria-label="Vitreous"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected('vitreous'); } }}
            />
            {/* Retina */}
            <path
              d="M 200 30 A 170 170 0 0 1 370 200 L 350 200 A 150 150 0 0 0 200 50 Z M 200 370 A 170 170 0 0 1 30 200 L 50 200 A 150 150 0 0 0 200 350 Z"
              fill="#fde68a" stroke="#d97706" strokeWidth="2" opacity="0.7"
              className={`cursor-pointer transition-all ${selected === 'retina' ? 'stroke-teal-500 stroke-[3]' : 'hover:stroke-amber-600'}`}
              onClick={() => setSelected('retina')}
              tabIndex={0}
              role="button"
              aria-label="Retina"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected('retina'); } }}
            />
            {/* Optic nerve */}
            <path
              d="M 370 200 L 390 190 L 390 210 Z"
              fill="#fecaca" stroke="#dc2626" strokeWidth="2"
              className={`cursor-pointer transition-all ${selected === 'optic-nerve' ? 'stroke-teal-500 stroke-[3]' : 'hover:stroke-red-600'}`}
              onClick={() => setSelected('optic-nerve')}
              tabIndex={0}
              role="button"
              aria-label="Optic nerve"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected('optic-nerve'); } }}
            />
          </svg>
        </div>
        <p className="text-xs text-slate-500 mt-2 text-center">Educational diagram only. Select a part of the eye to learn more.</p>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Select a part of the eye:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {eyeParts.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                selected === p.id
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
          <h4 className="text-lg font-bold text-slate-900">{part.name}</h4>
          <p className="text-sm text-teal-700 font-medium mt-1">{part.location}</p>
          <p className="mt-3 text-slate-700 leading-relaxed">{part.explanation}</p>
          <div className="mt-4 p-3 bg-white rounded-lg border-l-4 border-teal-500">
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900">Why inflammation here matters: </span>
              {part.whyItMatters}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
