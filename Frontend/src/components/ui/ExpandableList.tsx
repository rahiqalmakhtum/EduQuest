'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ExpandableItemProps {
  question: string;
  answer?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const ExpandableItem: React.FC<ExpandableItemProps> = ({ 
  question, 
  answer, 
  isOpen, 
  onToggle 
}) => {
  return (
    <div className="w-full">
      <div 
        className="w-full h-[97px] bg-global-4 shadow-lg rounded-lg flex flex-row items-center justify-between px-12 cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-2xl font-semibold leading-8 text-global-4 font-bricolage flex-1">
          {question}
        </h3>
        <Image
          src="/images/img_chevron_down.svg"
          alt="Chevron"
          width={35}
          height={39}
          className={`w-[35px] h-[39px] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      {isOpen && answer && (
        <div className="w-full bg-global-4 px-12 py-6 border-t border-gray-200">
          <p className="text-base font-normal leading-6 text-global-4 font-inter">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const ExpandableList = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      id: 1,
      question: "What types of questions does EduQuest support?",
      answer: "EduQuest supports multiple choice, true/false, short answer, essay questions, and more advanced question types with AI-powered generation."
    },
    {
      id: 2,
      question: "Is it suitable for schools and colleges?",
      answer: "Yes, EduQuest is designed for both schools and colleges, with flexible features that scale from small classrooms to large institutions."
    },
    {
      id: 3,
      question: "Can I import my existing questions?",
      answer: "Absolutely! You can easily import your existing question banks and integrate them with our AI-powered system."
    },
    {
      id: 4,
      question: "How accurate is auto-grading?",
      answer: "Our auto-grading system uses advanced AI algorithms with over 95% accuracy for objective questions and sophisticated analysis for subjective responses."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="flex flex-col space-y-4">
        {faqItems.map((item) => (
          <ExpandableItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openItems.includes(item.id)}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpandableList;