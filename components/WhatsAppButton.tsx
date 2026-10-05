"use client";

import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919108414481"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 99999,
        width: "56px",
        height: "56px",
        backgroundColor: "#D61F26",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)",
        cursor: "pointer",
        textDecoration: "none",
        transition: "transform 0.2s ease, opacity 0.2s ease",
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 3.5a12.5 12.5 0 0 0-10.7 19l-1.3 4.8 4.9-1.3A12.5 12.5 0 1 0 16 3.5Zm0 22.8c-2 0-3.9-.6-5.5-1.7l-.4-.3-2.9.8.8-2.8-.3-.4A10.3 10.3 0 1 1 16 26.3Zm5.7-7.7c-.3-.2-1.7-.9-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.5-3.8-3.3-.3-.5.3-.5.8-1.7.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3.1 4.8 4.3 1.8.8 2.5.9 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.5Z"
          fill="white"
        ></path>
      </svg>
    </a>
  );
}
