"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Modal from "@/components/Common/Modal";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_4cmsvu4",
        "template_9upchqp",
        formRef.current,
        "3xkGWscWh4TujDkql"
      )
      .then(
        () => {
          setIsSubmitting(false);
          setShowConfirmation(true);
          formRef.current?.reset();
        },
        (error) => {
          setIsSubmitting(false);
          alert("An error occurred. Please try again.");
          console.error("FAILED...", error);
        }
      );
  };

  const faqs = [
    {
      q: "What sets us apart from other Madagascar tour operators?",
      a: "We craft premium travel experiences enriched by deep local expertise and exclusive investment opportunities. From untouched beaches to hidden natural wonders, we provide privileged access to Madagascar’s most spectacular destinations. Every journey is personalized, offering luxurious, high-quality service and genuine cultural immersion that turns every trip into an unforgettable adventure.",
    },
    {
      q: "Are your tours suitable for different fitness levels?",
      a: "Absolutely. We design each journey to match your individual preferences and physical comfort. From serene nature walks to exhilarating adventures, every experience is thoughtfully crafted to ensure you enjoy Madagascar at your own pace, with style, comfort, and unforgettable moments.",
    },
    {
      q: "What investment opportunities do you offer in Madagascar?",
      a: "We facilitate strategic investments across agribusiness, infrastructure, mining, ICT, energy, and luxury tourism. Leveraging our deep local expertise and extensive network, we help international companies establish successful, sustainable, and high-impact operations in Madagascar.",
    },
    {
      q: "How do I book a tour or investment consultation?",
      a: "Booking is simple. Complete our contact form or reach us directly on WhatsApp at +261 32 42 104 93, and we’ll personally discuss your needs. From there, we craft a tailored travel experience or bespoke investment strategy designed to match your goals and preferences.",
    },
  ];

  return (
    <>
      <section className="pt-8 pb-24 px-6 bg-[#0d1211]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#C5A059] uppercase tracking-widest mb-4">
              Frequently Asked Questions
            </h2>
            <h3 className="text-4xl font-serif text-white">Everything You Need to Know</h3>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="glass p-8 rounded-3xl">
                <h4 className="text-xl font-serif mb-4 text-[#C5A059]">
                  {faq.q}
                </h4>
                <p className="text-gray-400 text-justify">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="pt-8 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[#C5A059] uppercase tracking-widest mb-4">
              Let&apos;s Talk Future
            </h2>
            <h3 className="text-5xl font-serif mb-8 text-white">
              Feel free <span className="italic">to reach out</span>.
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-[#C5A059]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="text-gray-300">+261 32 42 104 93</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-[#C5A059]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="text-gray-300">contact@ophiris.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-[#C5A059]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span className="text-gray-300">
                  Lot IVP 13 EA BIS, Antananarivo, Madagascar
                </span>
              </div>
            </div>
          </div>

          <div className="glass p-10 rounded-3xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <input
                  required
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#C5A059] outline-none transition-all text-white"
                />
                <input
                  required
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#C5A059] outline-none transition-all text-white"
                />
              </div>
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#C5A059] outline-none transition-all text-white"
              />
              <select
                required
                name="subject"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#C5A059] outline-none transition-all text-gray-400"
              >
                <option value="Subject">Subject</option>
                <option value="Tours & Travel">Tours & Travel</option>
                <option value="Investment">Investment</option>
                <option value="Import & Export">Import & Export</option>
                <option value="Training">Training</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Your message..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#C5A059] outline-none transition-all text-white"
              ></textarea>
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-[#C5A059] text-black font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all flex items-center justify-center"
              >
                {isSubmitting ? <div className="loader"></div> : "Send Request"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Modal isOpen={showConfirmation} onClose={() => setShowConfirmation(false)}>
        <div className="glass max-w-md mx-auto rounded-3xl relative p-8 text-center border-white/20 shadow-2xl">
          <button
            onClick={() => setShowConfirmation(false)}
            className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C5A059] transition-colors"
          >
            ✕
          </button>
          <div className="mb-6">
            <svg
              className="w-16 h-16 mx-auto text-[#C5A059]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h2 className="text-3xl font-serif mb-4 text-white">Thank you!</h2>
          <p className="text-gray-400 mb-8">
            Your request has been received successfully. Our team will contact
            you very soon.
          </p>
          <button
            onClick={() => setShowConfirmation(false)}
            className="w-full bg-[#C5A059] text-black font-bold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
