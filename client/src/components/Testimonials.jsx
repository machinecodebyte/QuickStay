import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

const Card = ({ testimonial }) => (
  <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white cursor-pointer">
    <div className="flex gap-3">
      <img
        className="size-11 rounded-full object-cover"
        src={testimonial.image}
        alt={testimonial.name}
      />

      <div className="flex flex-col">
        <p className="font-medium text-gray-900">{testimonial.name}</p>
        <span className="text-xs text-slate-500">{testimonial.address}</span>

        {/* StarRating Component */}
        <div className="flex gap-1 mt-1">
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
    </div>

    <p className="text-sm py-4 text-gray-700 leading-relaxed">
      “{testimonial.review}”
    </p>
  </div>
);

const Testimonials = () => {
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30 overflow-hidden">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travellers consistently choose QuickStay for their exclusive and luxurious accommodations around the world"
      />

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* Row 1 */}
      <div className="w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-slate-50 to-transparent" />

        <div className="marquee-inner flex min-w-[200%] pt-10 pb-5">
          {loopedTestimonials.map((t, i) => (
            <Card testimonial={t} key={`row1-${i}`} />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-slate-50 to-transparent" />
      </div>

      {/* Row 2 */}
      <div className="w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-slate-50 to-transparent" />

        <div className="marquee-inner marquee-reverse flex min-w-[200%] pt-5 pb-10">
          {loopedTestimonials.map((t, i) => (
            <Card testimonial={t} key={`row2-${i}`} />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-slate-50 to-transparent" />
      </div>
    </div>
  );
};

export default Testimonials;
