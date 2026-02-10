'use client';

import { useState, ReactNode } from 'react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-primary-light last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 text-left hover:text-primary transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-secondary-dark">{title}</span>
        <svg
          className={`w-5 h-5 text-primary transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-secondary text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { title: string; content: string }[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-primary-light/50 divide-y divide-primary-light">
      {items.map((item, index) => (
        <div key={index} className="px-6">
          <AccordionItem
            title={item.title}
            isOpen={openItems.includes(index)}
            onToggle={() => handleToggle(index)}
          >
            {item.content}
          </AccordionItem>
        </div>
      ))}
    </div>
  );
}
