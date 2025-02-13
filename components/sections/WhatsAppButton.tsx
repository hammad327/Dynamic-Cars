"use client"; 

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
const WhatsAppButton = () => {
  const phoneNumber = "447492227466"; 
  const message = "Hello! I'm interested in your services."; 

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        style={{
          position: "fixed",
          left: "20px",
          bottom: "20px",
          zIndex: "1000",
          backgroundColor: "#25d366",
          padding: "10px",
          borderRadius: "50%",
          boxShadow: "0 8px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          color: "white",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaWhatsapp size={30} color="white" /> 
      </div>
    </Link>
  );
};

export default WhatsAppButton;
