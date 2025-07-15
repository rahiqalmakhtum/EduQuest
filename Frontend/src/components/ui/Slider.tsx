'use client';

import React from 'react';
import Image from 'next/image';

const Slider = () => {
  const testimonials = [
    {
      id: 1,
      text: "Auto-grading and analytics help me instantly understand how my students are performing. It is like having a personal assistant for assessments.",
      author: "Mr. Ravi Mehra, High School Teacher, Horizon International",
      bgColor: "bg-global-4",
      textColor: "text-global-5"
    },
    {
      id: 2,
      text: "EduQuest has completely transformed how we prepare exams. The AI-generated questions are accurate and save us hours each week!",
      author: "Dr. Sarah Ahmed, Head of Department, Greenfield College",
      bgColor: "bg-global-1",
      textColor: "text-global-7"
    },
    {
      id: 3,
      text: "Auto-grading and analytics help me instantly understand how my students are performing. It is like having a personal assistant for assessments.",
      author: "Mr. Ravi Mehra, High School Teacher, Horizon International",
      bgColor: "bg-global-4",
      textColor: "text-global-5"
    },
    {
      id: 4,
      text: "EduQuest has completely transformed how we prepare exams. The AI-generated questions are accurate and save us hours each week!",
      author: "Dr. Sarah Ahmed, Head of Department, Greenfield College",
      bgColor: "bg-global-1",
      textColor: "text-global-7"
    }
  ];

  const StarRating = () => (
    <div className="flex flex-row space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Image
          key={star}
          src="/images/img_starfilled.svg"
          alt="Star"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ))}
    </div>
  );

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-row space-x-8 px-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`
              min-w-[352px] h-[404px] rounded-[18px] p-6 flex flex-col justify-between
              shadow-lg ${testimonial.bgColor}
            `}
          >
            <div className="flex-1">
              <p className={`
                text-xl font-normal leading-7 font-inter mb-6
                ${testimonial.textColor}
              `}>
                &quot;{testimonial.text}&quot;
              </p>
              <p className={`
                text-xl font-normal leading-7 font-inter
                ${testimonial.textColor}
              `}>
                — {testimonial.author}
              </p>
            </div>
            <div className="mt-6">
              <StarRating />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;