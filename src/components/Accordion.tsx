import { useState, useRef, useEffect, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  id: string;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ id, title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(defaultOpen ? undefined : 0);

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      const scrollH = contentRef.current.scrollHeight;
      setHeight(scrollH);
      const timer = setTimeout(() => setHeight(undefined), 300);
      return () => clearTimeout(timer);
    } else {
      setHeight(contentRef.current.scrollHeight);
      requestAnimationFrame(() => setHeight(0));
    }
  }, [isOpen]);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
      >
        <span>{title}</span>
        <ChevronDown
          className={`shrink-0 text-teal-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
          aria-hidden="true"
        />
      </button>
      <div
        id={`${id}-content`}
        ref={contentRef}
        role="region"
        style={{ height: height === undefined ? 'auto' : height }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="px-5 pb-5 text-slate-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { id: string; title: string; content: ReactNode }[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <AccordionItem key={item.id} id={item.id} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
