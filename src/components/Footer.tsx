'use client';

import { FaInstagram, FaFacebookF, FaPinterestP, FaTiktok } from 'react-icons/fa';

const faqs = [
  'Semi-Permanent vs Temporary?',
  'Is INKHUB Tattoos safe?',
  'How long does an Inkhub tattoo last?',
  'Do Inkhub tattoos expire?'
];

const policies = [
  'Refund Policy',
  'Privacy Policy',
  'Terms of Service',
  'Shipping Policy'
];

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto px-4 pt-4 pb-2">
        {/* Heading */}
        <h2 className="text-left text-2xl font-light tracking-wide text-black mb-2">FAQS</h2>
        {/* FAQ Dropdowns */}
        <div className="flex flex-col gap-1 mb-4">
          {faqs.map((q, i) => (
            <button
              key={i}
              className="w-full flex items-center gap-2 py-2 text-left text-base font-light text-black focus:outline-none"
              tabIndex={0}
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-300 bg-white text-lg text-gray-500">
                <span className="rotate-90">&#8250;</span>
              </span>
              <span className="flex-1">{q}</span>
            </button>
          ))}
        </div>
        {/* Divider */}
        <hr className="border-gray-200 my-4" />
        {/* Policy Links */}
        <div className="flex flex-col gap-2 mb-4">
          {policies.map((policy, i) => (
            <a key={i} href="#" className="text-left text-sm text-black font-light hover:underline">
              {policy}
            </a>
          ))}
        </div>
        {/* Divider */}
        <hr className="border-gray-200 my-4" />
        {/* Sign Up Dropdown */}
        <button className="w-full flex items-center justify-between py-3 text-left text-xs font-light tracking-widest uppercase text-black focus:outline-none">
          SIGN UP AND SAVE
          <span className="text-xl rotate-90">&#8250;</span>
        </button>
        {/* Divider */}
        <hr className="border-gray-200 my-4" />
        {/* Powered by Shopify */}
        <div className="w-full flex justify-center">
          <span className="text-xs text-gray-400 mb-2">Powered by Shopify</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 