import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-blue-400 group-hover:scale-110 transition-transform duration-200" />,
    label: "Email",
    value: "jeromemondol11@gmail.com",
    link: "mailto:jeromemondol11@gmail.com"
  },
  {
    icon: <FaPhone className="text-green-400 group-hover:scale-110 transition-transform duration-200" />,
    label: "Phone",
    value: "+880 1234 567890",
    link: "tel:+8801234567890"
  },
  {
    icon: <FaWhatsapp className="text-green-500 group-hover:scale-110 transition-transform duration-200" />,
    label: "WhatsApp",
    value: "+880 1234 567890",
    link: "https://wa.me/8801234567890"
  }
];

const Contact = () => (
  <section id="contact" className="mt-16 mb-8 px-2 sm:px-0">
    <div className=" mb-8">
      <h2 className="text-dark text-2xl font-extrabold tracking-tight underline mb-2">Contact</h2>
    </div>
    <div className="max-w-md mx-auto  backdrop-blur-lg rounded-2xl shadow-2xl p-6 flex flex-col gap-6 border border-gradient-to-r from-blue-400 via-pink-400 to-green-400 border-2 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent " />
      {contactInfo.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          className="group flex items-center gap-4 px-4 py-3 rounded-xl bg-light/10 hover:bg-light/20 transition-all duration-200 shadow-sm relative z-10"
          target={item.link.startsWith('http') ? "_blank" : undefined}
          rel="noopener noreferrer"
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="font-semibold text-light w-20 text-center sm:text-left">{item.label}:</span>
          <span className="text-secondary group-hover:text-dark transition-colors text-sm sm:text-base break-all font-mono">{item.value}</span>
        </a>
      ))}
    </div>
  </section>
);

export default Contact;
