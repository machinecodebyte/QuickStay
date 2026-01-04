import React from "react";
import { assets } from "../assets/assets";

const NewsLetter = () => {
  return (
    <section className="w-full bg-slate-900 px-6 py-24 text-center text-white flex flex-col items-center justify-center">
      <p className="text-indigo-400 font-medium tracking-wide uppercase">
        Stay Inspired
      </p>

      <h1 className="max-w-2xl font-playfair font-semibold text-4xl md:text-5xl leading-tight mt-3">
        Exclusive hotel deals, travel tips & luxury stays — straight to your inbox
      </h1>

      <p className="text-slate-400 max-w-xl mt-4 text-sm md:text-base">
        Subscribe to our newsletter and be the first to discover hand-picked
        hotels, limited-time offers, and unforgettable travel experiences.
      </p>

      <div className="flex items-center mt-10 border border-slate-600 focus-within:outline-2 focus-within:outline-indigo-500 text-sm rounded-full h-14 max-w-md w-full bg-slate-800">
        <input
          type="email"
          placeholder="Enter your email address"
          className="bg-transparent outline-none px-5 h-full flex-1 text-white placeholder:text-slate-400"
        />

        <button className="group bg-indigo-600 hover:bg-indigo-500 transition-all text-white rounded-full h-11 mr-1 px-7 flex items-center gap-2 justify-center font-medium cursor-pointer">
          Subscribe
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="w-3.5 invert transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      <p className="text-xs text-slate-500 mt-4">
        No spam. Unsubscribe anytime.
      </p>
    </section>
  );
};

export default NewsLetter;
