 
// THIS COMPONENT IS MADE USING CHATGPT'S CODE SNIPPET GENERATOR
// THIS COMPONENT IS MADE USING CHATGPT'S CODE SNIPPET GENERATOR
// THIS COMPONENT IS MADE USING CHATGPT'S CODE SNIPPET GENERATOR

import  { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollableNavProps {
  items: Array<{
    id: string;
    label: string;
    onClick?: () => void;
  }>;
}

export default function ScrollableNav({ items }: ScrollableNavProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative flex items-center w-full max-w-full">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 z-10 p-2 text-gray-600 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-12 py-4 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={item.onClick}
            className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap bg-white border border-gray-200 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex-shrink-0"
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 z-10 p-2 text-gray-600 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}