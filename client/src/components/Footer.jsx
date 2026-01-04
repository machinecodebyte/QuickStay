import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#F6F9FC] text-gray-500 pt-24 px-6 md:px-16 lg:px-24 xl:px-32 font-playfair">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-24">
        {/* Brand (Wider & Taller) */}
        <div className="lg:col-span-2 max-w-md space-y-6">
          <img
            src={assets.logo}
            alt="QuickStay Logo"
            className="h-10 invert opacity-80"
          />

          <p className="text-sm leading-[1.9] text-gray-500">
            QuickStay is a premium hotel booking platform designed to help you
            discover luxury stays, exclusive deals, and unforgettable travel
            experiences across the world.
          </p>

          <div className="flex items-center gap-5 pt-3">
            <img
              src={assets.instagramIcon}
              className="w-5 cursor-pointer opacity-70 hover:opacity-100 transition"
            />
            <img
              src={assets.facebookIcon}
              className="w-5 cursor-pointer opacity-70 hover:opacity-100 transition"
            />
            <img
              src={assets.twitterIcon}
              className="w-5 cursor-pointer opacity-70 hover:opacity-100 transition"
            />
            <img
              src={assets.linkendinIcon}
              className="w-5 cursor-pointer opacity-70 hover:opacity-100 transition"
            />
          </div>
        </div>

        {/* Company */}
        <div className="space-y-4 max-w-xs">
          <p className="text-lg text-gray-600">Company</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a className="hover:text-gray-700 transition" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-gray-700 transition" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-gray-700 transition" href="#">
                Press
              </a>
            </li>
            <li>
              <a className="hover:text-gray-700 transition" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-gray-700 transition" href="#">
                Partners
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-4 max-w-xs">
          <p className="text-lg text-gray-600">Support</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a className="hover:text-gray-700 transition" href="#">
                Help Center
              </a>
            </li>
            <li>
              <a className="hover:text-gray-700 transition" href="#">
                Cancellation Policy
              </a>
            </li>
            <li>
              <a className="hover:text-gray-700 transition" href="#">
                Safety Information
              </a>
            </li>
            <li>
              <a className="hover:text-gray-700 transition" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-gray-700 transition" href="#">
                Accessibility
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-5 max-w-xs">
          <p className="text-lg text-gray-600">Stay Updated</p>

          <p className="text-sm leading-relaxed">
            Get exclusive hotel deals, travel inspiration, and early access to
            luxury stays — delivered to your inbox.
          </p>

          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white border border-gray-300 h-11 px-4 rounded-l outline-none text-sm"
            />
            <button className="flex items-center justify-center bg-black min-w-11 h-11 rounded-r cursor-pointer hover:bg-gray-800 transition">
              <img
                src={assets.arrowIcon}
                alt="arrow"
                className="w-4 h-4 object-contain invert"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 mt-24" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between py-10 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} QuickStay. All rights reserved.</p>

        <ul className="flex items-center gap-6">
          <li>
            <a className="hover:text-gray-700 transition" href="#">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="hover:text-gray-700 transition" href="#">
              Terms of Service
            </a>
          </li>
          <li>
            <a className="hover:text-gray-700 transition" href="#">
              Sitemap
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
