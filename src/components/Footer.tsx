'use client';

import { useState } from 'react';
import { FaInstagram, FaFacebookF, FaPinterestP, FaTiktok } from 'react-icons/fa';

const faqs = [
  {
    question: 'How does Inkbox work?',
    answer: 'Dummy answer: Inkbox tattoos use a special formula to sink into the top layer of your skin and fade gradually over 1-2 weeks.'
  },
  {
    question: 'How long does an Inkbox tattoo last?',
    answer: 'Dummy answer: Inkbox tattoos typically last 1-2 weeks depending on placement and care.'
  },
  {
    question: 'What color/shade will my tattoo be?',
    answer: 'Dummy answer: Inkbox tattoos develop into a dark blue or black shade, similar to a real tattoo.'
  },
  {
    question: 'What if I want to remove my tattoo sooner?',
    answer: 'Dummy answer: You can try exfoliating the area to help fade the tattoo more quickly.'
  },
];

const policies = [
  'Refund Policy',
  'Privacy Policy',
  'Terms of Service',
  'Shipping Policy'
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto px-4 pt-4 pb-2">
        {/* Heading */}
        <h2 className="text-center text-[24px] font-heading text-heading6 mt-6 font-extrabold tracking-wide text-black mb-2 md:text-3xl">Frequently Asked Questions</h2>
        <div className="text-center mb-4 text-base text-gray-700">
          More Questions? Visit the{' '}
          <a href="#" className="underline font-medium text-black">Help & FAQ Center</a>
        </div>
        {/* FAQ Dropdowns */}
        <div className="flex flex-col gap-1 mb-4">
          {faqs.map((faq, i) => (
            <div key={i} className="w-full">
              <button
                className="w-full flex items-center justify-between py-4 text-left text-base font-medium text-black focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                tabIndex={0}
              >
                <span className='font-medium text-base'>{faq.question}</span>
                <span className={`transition-transform duration-200 text-2xl ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} text-gray-700 text-base pl-1 pr-2 pb-2`}> 
                {openIndex === i && <div>{faq.answer}</div>}
              </div>
              <hr className="border-gray-200" />
            </div>
          ))}
        </div>
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