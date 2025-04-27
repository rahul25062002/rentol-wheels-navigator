// src/components/WhatsappFloatingButton.tsx

import React from "react";

import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloatingButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/917870807536" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all what-app"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsappFloatingButton;
